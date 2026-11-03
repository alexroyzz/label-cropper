// Each language: ui strings + t(P, auto) -> page copy for platform name P.
// auto=true when the tool detects that marketplace's label automatically.
export const en = {
  code: 'en', hreflang: 'en', locale: 'en_IN', dir: 'ltr', native: 'English', suffix: '',
  ui: { home: 'Home', blog: 'Blog', toc: 'In this guide', faqH: 'Frequently asked questions', ctaText: 'Ready to crop your labels?', ctaBtn: 'Open Label Cropper', relatedH: 'Guides for other marketplaces', readIn: 'Read this guide in another language', minRead: 'min read', published: 'Published', hubH: 'Shipping Label Cropper Guides', hubIntro: 'Guides for Meesho and Flipkart sellers.' },
  t: (P, auto) => {
    const mode = auto
      ? `The tool finds the ${P} label on each page automatically. If a page is not detected, it tells you and uses the crop area in Advanced crop settings, so check the preview.`
      : `Automatic detection currently covers Flipkart and Meesho. For ${P}, open Advanced crop settings, set Left, Top, Width and Height as a percentage of the page, crop, and check the preview. The same area is used on every page.`;
    return {
      title: `How to Crop ${P} Shipping Labels: Free ${P} Label Cropper`,
      desc: `Free ${P} shipping label cropper. Crop ${P} label PDFs for 4x6 thermal printing, preview the result and download it. No signup, runs in your browser.`,
      h1: `How to Crop a ${P} Shipping Label PDF (Free ${P} Label Cropper)`,
      intro: `A ${P} label PDF often has extra white space or an invoice around the label. This free ${P} label cropper trims each page to the label so you can print it on a 4x6 thermal printer.`,
      stepsH: `How to crop a ${P} label`,
      steps: [`Select ${P} in the tool above.`, `Add the ${P} label PDF you downloaded from your seller panel. You can add several PDFs from the same marketplace.`, 'Press Crop Labels and review every page in the preview.', 'If it looks right, download the cropped PDF and print it.'],
      checkH: 'Check before printing', check: 'On every page the barcode and the address must be complete. Print one label first and scan its barcode, then print the rest.',
      modeH: 'Auto-detect or manual crop', mode,
      faq: [
        [`How do I crop a ${P} label?`, `Select ${P}, upload the label PDF, press Crop Labels, check the preview and download the cropped PDF.`],
        [`Is there a free ${P} label cropper?`, 'Yes. This tool is free, needs no signup and adds no watermark.'],
        [`Does it crop the ${P} label automatically?`, mode],
        [`Can I crop and sort ${P} labels by SKU in one go?`, 'Yes. Add several PDFs of one marketplace, tick Group labels by SKU and copy the SKU picklist. This needs readable SKU text in the PDF.'],
        ['Is my PDF uploaded to a server?', 'No. The PDF is read and cropped in your browser and is not sent to any server.'],
      ],
    };
  },
};

export const hinglish = {
  code: 'hinglish', hreflang: 'hi-Latn', locale: 'hi_IN', dir: 'ltr', native: 'Hinglish', suffix: '-kaise-kare',
  ui: { home: 'Home', blog: 'Blog', toc: 'Is guide mein', faqH: 'Aksar pooche jaane wale sawal (FAQ)', ctaText: 'Apne labels crop karne ke liye ready ho?', ctaBtn: 'Label Cropper kholo', relatedH: 'Dusre marketplace ki guides', readIn: 'Ye guide dusri language mein padho', minRead: 'min ka read', published: 'Published', hubH: 'Shipping Label Cropper Guides (Hinglish)', hubIntro: 'Meesho aur Flipkart sellers ke liye Hinglish mein label crop karne ki guides.' },
  t: (P, auto) => {
    const mode = auto
      ? `Tool ${P} label ki jagah har page par apne-aap dhoondh leta hai. Agar koi page na mile to Advanced crop settings ka crop area use hota hai, isliye preview zaroor check karo.`
      : `Abhi auto-detect sirf Flipkart aur Meesho ke liye hai. ${P} ke liye Advanced crop settings mein Left, Top, Width, Height (page ke percent mein) khud set karo, crop karo aur preview mein check karo. Wahi area har page par lagta hai.`;
    return {
      title: `${P} ka Label Cropper Kaise Kare | Free ${P} Label Crop Tool`,
      desc: `${P} ka label cropper free mein use karo. ${P} shipping label PDF crop karne ka tarika, 4x6 thermal printer ke liye. No signup, file browser mein hi rehti hai.`,
      h1: `${P} ka Label Cropper Kaise Kare (Free Online Tool)`,
      intro: `${P} ke shipping label PDF mein label ke saath kaafi khali jagah ya invoice bhi hota hai. Is free tool se aap sirf label wala hissa crop karke 4x6 thermal printer par print kar sakte ho. Neeche ${P} label cropper karne ka tarika step by step diya hai.`,
      stepsH: `${P} label crop karne ka tarika`,
      steps: [`Upar tool mein ${P} select karo.`, `Seller panel se download ki hui ${P} label PDF upload karo. Ek hi marketplace ki kai PDF bhi add kar sakte ho.`, 'Crop Labels dabao aur preview mein saare pages dekho.', 'Sab sahi lage to cropped PDF download karo aur print karo.'],
      checkH: 'Print se pehle check karo', check: 'Har page par barcode aur address poora dikhna chahiye. Pehle ek label print karke barcode scan karke dekho, phir baaki print karo.',
      modeH: 'Auto-detect ya manual crop', mode,
      faq: [
        [`${P} ka label cropper kaise kare? (${P} label cropper karne ka tarika)`, `Tool mein ${P} select karo, label PDF upload karo, Crop Labels dabao, preview dekho aur cropped PDF download karo.`],
        [`${P} ka label cropper do / free ${P} label cropper kahan milega?`, `Ye page hi free ${P} label cropper hai. Bas PDF upload karo, crop karo aur download karo. Signup ki zaroorat nahi aur koi watermark nahi.`],
        [`Kya ${P} ka label apne-aap crop hota hai?`, mode],
        [`Kya kai PDF ek saath crop karke SKU ke hisaab se sort kar sakte hain?`, 'Haan. Ek hi marketplace ki kai PDF add karo, Group labels by SKU tick karo aur SKU picklist copy karo. Iske liye PDF mein SKU ka text padhne layak hona chahiye.'],
        ['Kya meri PDF kisi server par upload hoti hai?', 'Nahi. PDF aapke browser mein hi padhi aur crop ki jaati hai, kisi server par nahi bheji jaati.'],
      ],
    };
  },
};

export const hi = {
  code: 'hi', hreflang: 'hi', locale: 'hi_IN', dir: 'ltr', native: 'हिन्दी', suffix: '',
  ui: { home: 'होम', blog: 'ब्लॉग', toc: 'इस गाइड में', faqH: 'अक्सर पूछे जाने वाले सवाल', ctaText: 'अपने लेबल क्रॉप करने के लिए तैयार हैं?', ctaBtn: 'Label Cropper खोलें', relatedH: 'दूसरे मार्केटप्लेस की गाइड', readIn: 'यह गाइड दूसरी भाषा में पढ़ें', minRead: 'मिनट पढ़ने का समय', published: 'प्रकाशित', hubH: 'शिपिंग लेबल क्रॉपर गाइड (हिन्दी)', hubIntro: 'Meesho और Flipkart सेलर्स के लिए हिन्दी में शिपिंग लेबल क्रॉप करने की गाइड।' },
  t: (P, auto) => {
    const mode = auto
      ? `${P} के लेबल की जगह टूल हर पेज पर अपने-आप पहचान लेता है। अगर कोई पेज न मिले तो Advanced crop settings में क्रॉप एरिया बदलें और प्रीव्यू ज़रूर जाँचें।`
      : `अभी ऑटो-डिटेक्ट सिर्फ़ Flipkart और Meesho के लिए है। ${P} के लिए Advanced crop settings में Left, Top, Width, Height (पेज के प्रतिशत में) खुद सेट करें, क्रॉप करें और प्रीव्यू में जाँचें। वही एरिया हर पेज पर लगता है।`;
    return {
      title: `${P} लेबल क्रॉपर कैसे करें | मुफ़्त ${P} शिपिंग लेबल क्रॉप टूल`,
      desc: `${P} शिपिंग लेबल क्रॉपर मुफ़्त में इस्तेमाल करें। ${P} का लेबल PDF क्रॉप करके 4x6 थर्मल प्रिंटर के लिए तैयार करें। साइन-अप नहीं, फ़ाइल ब्राउज़र में ही रहती है।`,
      h1: `${P} का लेबल क्रॉपर कैसे करें (मुफ़्त ऑनलाइन टूल)`,
      intro: `${P} के शिपिंग लेबल PDF में लेबल के साथ काफ़ी खाली जगह या इनवॉइस भी होता है। इस मुफ़्त टूल से आप सिर्फ़ लेबल वाला हिस्सा क्रॉप करके 4x6 थर्मल प्रिंटर पर प्रिंट कर सकते हैं।`,
      stepsH: `${P} लेबल क्रॉप करने का तरीका`,
      steps: [`ऊपर टूल में ${P} चुनें।`, `अपने सेलर पैनल से डाउनलोड किया हुआ ${P} लेबल PDF अपलोड करें। एक ही मार्केटप्लेस की एक से ज़्यादा PDF भी जोड़ सकते हैं।`, '"Crop Labels" दबाएँ और प्रीव्यू में सारे पेज देखें।', 'सब सही हो तो क्रॉप की हुई PDF डाउनलोड करें और प्रिंट करें।'],
      checkH: 'प्रिंट से पहले जाँच करें', check: 'हर पेज पर बारकोड और पता पूरा दिखना चाहिए। पहले एक लेबल प्रिंट करके बारकोड स्कैन करके देखें, फिर बाकी प्रिंट करें।',
      modeH: 'ऑटो-डिटेक्ट या मैनुअल क्रॉप', mode,
      faq: [
        [`${P} का लेबल क्रॉपर कैसे करें?`, `टूल में ${P} चुनें, लेबल PDF अपलोड करें, "Crop Labels" दबाएँ, प्रीव्यू देखें और क्रॉप की हुई PDF डाउनलोड करें।`],
        [`क्या ${P} लेबल क्रॉपर मुफ़्त है?`, 'हाँ, यह पूरी तरह मुफ़्त है। साइन-अप की ज़रूरत नहीं और कोई वॉटरमार्क नहीं।'],
        [`क्या ${P} का लेबल अपने-आप क्रॉप होता है?`, mode],
        ['क्या कई PDF एक साथ क्रॉप करके SKU के हिसाब से सॉर्ट कर सकते हैं?', 'हाँ। एक ही मार्केटप्लेस की कई PDF जोड़ें, "Group labels by SKU" चुनें और SKU picklist कॉपी करें। इसके लिए PDF में SKU का टेक्स्ट पढ़ने लायक होना चाहिए।'],
        ['क्या मेरी PDF किसी सर्वर पर अपलोड होती है?', 'नहीं। PDF आपके ब्राउज़र में ही पढ़ी और क्रॉप की जाती है, किसी सर्वर पर नहीं भेजी जाती।'],
      ],
    };
  },
};

export const bn = {
  code: 'bn', hreflang: 'bn', locale: 'bn_IN', dir: 'ltr', native: 'বাংলা', suffix: '',
  ui: { home: 'হোম', blog: 'ব্লগ', toc: 'এই গাইডে', faqH: 'প্রায়শ জিজ্ঞাসিত প্রশ্ন', ctaText: 'আপনার লেবেল ক্রপ করতে প্রস্তুত?', ctaBtn: 'Label Cropper খুলুন', relatedH: 'অন্য মার্কেটপ্লেসের গাইড', readIn: 'এই গাইড অন্য ভাষায় পড়ুন', minRead: 'মিনিটে পড়া যায়', published: 'প্রকাশিত', hubH: 'শিপিং লেবেল ক্রপার গাইড (বাংলা)', hubIntro: 'Meesho ও Flipkart বিক্রেতাদের জন্য বাংলায় শিপিং লেবেল ক্রপ করার গাইড।' },
  t: (P, auto) => {
    const mode = auto
      ? `${P} লেবেলের জায়গা টুল প্রতিটি পৃষ্ঠায় নিজে থেকে খুঁজে নেয়। কোনো পৃষ্ঠা না পেলে Advanced crop settings-এ ক্রপ এরিয়া বদলান এবং প্রিভিউ অবশ্যই দেখে নিন।`
      : `এখন অটো-ডিটেক্ট শুধু Flipkart ও Meesho-র জন্য। ${P}-এর জন্য Advanced crop settings-এ Left, Top, Width, Height (পৃষ্ঠার শতাংশে) নিজে সেট করুন, ক্রপ করুন এবং প্রিভিউতে দেখুন। একই এরিয়া প্রতিটি পৃষ্ঠায় প্রযোজ্য হয়।`;
    return {
      title: `${P} লেবেল ক্রপার কীভাবে করবেন | বিনামূল্যে ${P} লেবেল ক্রপ টুল`,
      desc: `বিনামূল্যে ${P} শিপিং লেবেল ক্রপার। ${P} লেবেল PDF ক্রপ করে 4x6 থার্মাল প্রিন্টারের জন্য তৈরি করুন। সাইন-আপ লাগবে না, ফাইল ব্রাউজারেই থাকে।`,
      h1: `${P} লেবেল ক্রপার কীভাবে করবেন (বিনামূল্যে অনলাইন টুল)`,
      intro: `${P}-এর শিপিং লেবেল PDF-এ লেবেলের সঙ্গে অনেক ফাঁকা জায়গা বা ইনভয়েসও থাকে। এই বিনামূল্যের টুল দিয়ে শুধু লেবেলের অংশটুকু ক্রপ করে 4x6 থার্মাল প্রিন্টারে প্রিন্ট করতে পারবেন।`,
      stepsH: `${P} লেবেল ক্রপ করার পদ্ধতি`,
      steps: [`উপরের টুলে ${P} বেছে নিন।`, `সেলার প্যানেল থেকে ডাউনলোড করা ${P} লেবেল PDF আপলোড করুন। একই মার্কেটপ্লেসের একাধিক PDF-ও যোগ করা যায়।`, '"Crop Labels" চাপুন এবং প্রিভিউতে সব পৃষ্ঠা দেখুন।', 'সব ঠিক থাকলে ক্রপ করা PDF ডাউনলোড করে প্রিন্ট করুন।'],
      checkH: 'প্রিন্টের আগে যাচাই করুন', check: 'প্রতিটি পৃষ্ঠায় বারকোড ও ঠিকানা পুরোপুরি দেখা যেতে হবে। আগে একটি লেবেল প্রিন্ট করে বারকোড স্ক্যান করে দেখুন, তারপর বাকিগুলো প্রিন্ট করুন।',
      modeH: 'অটো-ডিটেক্ট বা ম্যানুয়াল ক্রপ', mode,
      faq: [
        [`${P} লেবেল ক্রপার কীভাবে ব্যবহার করব?`, `টুলে ${P} বেছে নিন, লেবেল PDF আপলোড করুন, "Crop Labels" চাপুন, প্রিভিউ দেখে ক্রপ করা PDF ডাউনলোড করুন।`],
        [`${P} লেবেল ক্রপার কি বিনামূল্যে?`, 'হ্যাঁ, এটি সম্পূর্ণ বিনামূল্যে। সাইন-আপ লাগে না, ওয়াটারমার্কও নেই।'],
        [`${P} লেবেল কি নিজে থেকে ক্রপ হয়?`, mode],
        ['একাধিক PDF একসঙ্গে ক্রপ করে SKU অনুযায়ী সাজানো যায়?', 'হ্যাঁ। একই মার্কেটপ্লেসের একাধিক PDF যোগ করুন, "Group labels by SKU" বেছে নিন এবং SKU picklist কপি করুন। এর জন্য PDF-এ SKU লেখা পড়ার মতো থাকতে হবে।'],
        ['আমার PDF কি কোনো সার্ভারে আপলোড হয়?', 'না। PDF আপনার ব্রাউজারেই পড়া ও ক্রপ করা হয়, কোনো সার্ভারে পাঠানো হয় না।'],
      ],
    };
  },
};
