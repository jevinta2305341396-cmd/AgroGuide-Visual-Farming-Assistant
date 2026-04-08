import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'agro_project.settings')
django.setup()

from api.models import CropDetails

data_list = [
    {"name": "আউশ ধান", "season": "kharif1", "planting_time": "মার্চ - এপ্রিল", "fertilizer": "ইউরিয়া, টিএসপি, এমওপি", "irrigation": "বৃষ্টি নির্ভর, প্রয়োজনে সেচ", "description": "গ্রীষ্মকালীন প্রধান ধান।", "image_name": "aush.jpg"},
    {"name": "পাট", "season": "kharif1", "planting_time": "মার্চ - মে", "fertilizer": "ইউরিয়া, গোবর সার", "irrigation": "হালকা সেচ", "description": "অর্থকরী ফসল।", "image_name": "jute.jpg"},
    {"name": "তিল", "season": "kharif1", "planting_time": "ফেব্রুয়ারি - মার্চ", "fertilizer": "টিএসপি, জিপসাম", "irrigation": "খুব কম সেচ প্রয়োজন", "description": "তেলজাতীয় ফসল।", "image_name": "sesame.jpg"},
    {"name": "করলা", "season": "kharif1", "planting_time": "ফেব্রুয়ারি - এপ্রিল", "fertilizer": "জৈব সার, ইউরিয়া", "irrigation": "নিয়মিত হালকা সেচ", "description": "গ্রীষ্মকালীন সবজি।", "image_name": "bitter_gourd.jpg"},
    {"name": "ঢেঁড়স", "season": "kharif1", "planting_time": "ফেব্রুয়ারি - মার্চ", "fertilizer": "ইউরিয়া, পটাশ", "irrigation": "মাটি শুকিয়ে গেলে সেচ", "description": "জনপ্রিয় সবজি।", "image_name": "okra.jpg"},

    {"name": "আমন ধান", "season": "kharif2", "planting_time": "জুন - আগস্ট", "fertilizer": "ইউরিয়া, টিএসপি, দস্তা", "irrigation": "বৃষ্টির পানি, প্রয়োজনে সম্পূরক সেচ", "description": "বর্ষাকালীন প্রধান ধান।", "image_name": "aman.jpg"},
    {"name": "মাসকলাই", "season": "kharif2", "planting_time": "আগস্ট - সেপ্টেম্বর", "fertilizer": "ইউরিয়া, টিএসপি", "irrigation": "সেচের তেমন প্রয়োজন নেই", "description": "ডাল জাতীয় ফসল।", "image_name": "mashkalai.jpg"},
    {"name": "বেগুন", "season": "kharif2", "planting_time": "জুলাই - আগস্ট", "fertilizer": "গোবর, ইউরিয়া, টিএসপি", "irrigation": "নিকাশ ব্যবস্থা ভালো থাকতে হবে", "description": "জনপ্রিয় সবজি।", "image_name": "brinjal.jpg"},
    {"name": "চালকুমড়া", "season": "kharif2", "planting_time": "জুন - জুলাই", "fertilizer": "জৈব সার", "irrigation": "নিয়মিত সেচ", "description": "মাচায় চাষযোগ্য সবজি।", "image_name": "ash_gourd.jpg"},
    {"name": "পেঁপে", "season": "kharif2", "planting_time": "এপ্রিল - মে", "fertilizer": "গোবর, খৈল, ইউরিয়া", "irrigation": "পানি জমতে দেওয়া যাবে না", "description": "ফল ও সবজি উভয়ই।", "image_name": "papaya.jpg"},

    {"name": "বোরো ধান", "season": "robi", "planting_time": "ডিসেম্বর - জানুয়ারি", "fertilizer": "ইউরিয়া, টিএসপি, এমওপি, জিপসাম", "irrigation": "প্রচুর সেচ প্রয়োজন", "description": "শীতকালীন উচ্চ ফলনশীল ধান।", "image_name": "boro.jpg"},
    {"name": "গম", "season": "robi", "planting_time": "নভেম্বর - ডিসেম্বর", "fertilizer": "ইউরিয়া, টিএসপি, জিপসাম", "irrigation": "২-৩ বার সেচ প্রয়োজন", "description": "শীতকালীন প্রধান দানা শস্য।", "image_name": "wheat.jpg"},
    {"name": "আলু", "season": "robi", "planting_time": "নভেম্বর", "fertilizer": "ইউরিয়া, পটাশ, টিএসপি", "irrigation": "মাটি সবসময় আর্দ্র রাখতে হবে", "description": "প্রধান শীতকালীন সবজি।", "image_name": "potato.jpg"},
    {"name": "সরিষা", "season": "robi", "planting_time": "অক্টোবর - নভেম্বর", "fertilizer": "ইউরিয়া, টিএসপি, জিপসাম", "irrigation": "ফুল আসার সময় হালকা সেচ", "description": "প্রধান তেল জাতীয় ফসল।", "image_name": "mustard.jpg"},
    {"name": "টমেটো", "season": "robi", "planting_time": "অক্টোবর - নভেম্বর", "fertilizer": "গোবর, ইউরিয়া, পটাশ", "irrigation": "১০-১২ দিন পরপর সেচ", "description": "শীতকালীন সবজি।", "image_name": "tomato.jpg"},
]

for item in data_list:
    CropDetails.objects.get_or_create(name=item['name'], defaults=item)

seasons = ['kharif1', 'kharif2', 'robi']
for s in seasons:
    existing_count = CropDetails.objects.filter(season=s).count()
    for i in range(existing_count + 1, 31):
        CropDetails.objects.get_or_create(
            name=f"নতুন ফসল {i} ({s})",
            defaults={
                "season": s,
                "planting_time": "নির্ধারিত সময় আপডেট করুন",
                "fertilizer": "জৈব সার ও রাসায়নিক সার",
                "irrigation": "প্রয়োজন অনুযায়ী সেচ",
                "description": "এটি একটি অটো জেনারেটেড ফসল। অ্যাডমিন প্যানেল থেকে তথ্য পরিবর্তন করুন।",
                "image_name": "demo.jpg"
            }
        )

print("90 Crops Added Successfully!")