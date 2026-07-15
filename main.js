const yearNode = document.querySelector('#year');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear().toString();
}

const LANGUAGE_STORAGE_KEY = 'cambobia-language';
const DEFAULT_LANGUAGE = 'en';

const phraseTranslations = {
  km: {
    'Skip to content': 'រំលងទៅមាតិកា',
    'Cambodia Boutique Investment Advisory': 'ទីប្រឹក្សាវិនិយោគប៊ូទិកកម្ពុជា',
    Products: 'ផលិតផល',
    'Why CamboBIA': 'ហេតុអ្វី CamboBIA',
    Traction: 'វឌ្ឍនភាព',
    'Who It Serves': 'អ្នកដែលយើងបម្រើ',
    Investors: 'វិនិយោគិន',
    Policies: 'គោលការណ៍',
    Contact: 'ទំនាក់ទំនង',
    'Digital products for business, education, and finance.': 'ផលិតផលឌីជីថលសម្រាប់អាជីវកម្ម ការអប់រំ និងហិរញ្ញវត្ថុ។',
    'One brand. Clear product groups. Easy entry points for customers, students, teachers, banks, SMEs, and lenders.':
      'ម៉ាកតែមួយ។ ផលិតផលច្បាស់លាស់។ ចូលប្រើបានងាយសម្រាប់អតិថិជន សិស្ស គ្រូ ធនាគារ SME និងអ្នកឥណទាន។',
    'Explore The Products': 'មើលផលិតផល',
    'Find Your Fit': 'ស្វែងរកជម្រើសសមស្រប',
    'For Investors': 'សម្រាប់វិនិយោគិន',
    'For sales teams': 'សម្រាប់ក្រុមលក់',
    'For schools': 'សម្រាប់សាលារៀន',
    'For banks': 'សម្រាប់ធនាគារ',
    'For lenders and SMEs': 'សម្រាប់អ្នកឥណទាន និង SME',
    Messaging: 'ការផ្ញើសារ',
    'Messenger Hub for WhatsApp, Telegram, and Signal outreach': 'Messenger Hub សម្រាប់ផ្សព្វផ្សាយតាម WhatsApp, Telegram និង Signal',
    Education: 'ការអប់រំ',
    'Student, teacher, and banking skill platforms': 'វេទិកាសម្រាប់សិស្ស គ្រូ និងជំនាញធនាគារ',
    Commerce: 'ពាណិជ្ជកម្ម',
    'Micro-SME Platform for sales, inventory, and POS workflows': 'វេទិកា Micro-SME សម្រាប់លក់ ស្តុក និងដំណើរការ POS',
    'Micro Lending': 'ឥណទានខ្នាតតូច',
    'Micro-Lending Platform for borrower, loan, and record management': 'វេទិកា Micro-Lending សម្រាប់គ្រប់គ្រងអ្នកខ្ចី ប្រាក់កម្ចី និងកំណត់ត្រា',
    'Focus Game': 'ហ្គេមផ្តោតអារម្មណ៍',
    'Pair Me Up for memory and attention practice': 'Pair Me Up សម្រាប់ហ្វឹកហាត់ការចងចាំ និងការផ្តោតអារម្មណ៍',
    Payments: 'ការទូទាត់',
    'PayKH for digital payment flow and merchant transaction support': 'PayKH សម្រាប់លំហូរការទូទាត់ឌីជីថល និងការគាំទ្រប្រតិបត្តិការអាជីវករ',
    'How organizations start': 'របៀបដែលអង្គការចាប់ផ្តើម',
    'Most teams begin with one visible workflow first: customer messaging, student learning, banking training, SME commerce, or lending records.':
      'ក្រុមភាគច្រើនចាប់ផ្តើមពីលំហូរការងារមួយដែលមើលឃើញជាមុនសិន៖ ការផ្ញើសារអតិថិជន ការសិក្សារបស់សិស្ស ការបណ្តុះបណ្តាលធនាគារ ពាណិជ្ជកម្ម SME ឬកំណត់ត្រាឥណទាន។',
    'What happens next': 'អ្វីកើតឡើងបន្ទាប់',
    'After the first workflow is working, they add the second matching product to connect outreach with operations, or learning with oversight.':
      'បន្ទាប់ពីលំហូរការងារដំបូងដំណើរការបានល្អ ពួកគេបន្ថែមផលិតផលទីពីរដែលសមស្រប ដើម្បីភ្ជាប់ការផ្សព្វផ្សាយជាមួយប្រតិបត្តិការ ឬការសិក្សាជាមួយការត្រួតពិនិត្យ។',
    'Why this site matters': 'ហេតុអ្វីគេហទំព័រនេះសំខាន់',
    'This landing page helps customers, partners, and investors understand where each platform fits and which combination is the right entry point.':
      'ទំព័រដំបូងនេះជួយអតិថិជន ដៃគូ និងវិនិយោគិន ឲ្យយល់ថាវេទិកានីមួយៗសមស្របនៅកន្លែងណា និងការរួមបញ្ចូលណាដែលជាចំណុចចូលត្រឹមត្រូវ។',
    'Visible today': 'អ្វីដែលមើលឃើញថ្ងៃនេះ',
    'Seven public platform paths, direct product pages, and clear policy links are already live for review and exploration.':
      'ផ្លូវចូលវេទិកាសាធារណៈចំនួន ៧ ទំព័រផលិតផលដោយផ្ទាល់ និងតំណភ្ជាប់គោលការណ៍ច្បាស់លាស់ បានដាក់ឲ្យប្រើរួចហើយសម្រាប់ការពិនិត្យ និងស្វែងយល់។',
    'Eight public platform paths, direct product pages, and clear policy links are already live for review and exploration.':
      'ផ្លូវចូលវេទិកាសាធារណៈចំនួន ៨ ទំព័រផលិតផលដោយផ្ទាល់ និងតំណភ្ជាប់គោលការណ៍ច្បាស់លាស់ បានដាក់ឲ្យប្រើរួចហើយសម្រាប់ការពិនិត្យ និងស្វែងយល់។',
    'Nine public platform paths, direct product pages, and clear policy links are already live for review and exploration.':
      'ផ្លូវចូលវេទិកាសាធារណៈចំនួន ៩ ទំព័រផលិតផលដោយផ្ទាល់ និងតំណភ្ជាប់គោលការណ៍ច្បាស់លាស់ បានដាក់ឲ្យប្រើរួចហើយសម្រាប់ការពិនិត្យ និងស្វែងយល់។',
    'Ten public platform paths, direct product pages, and clear policy links are already live for review and exploration.':
      'ផ្លូវចូលវេទិកាសាធារណៈចំនួន ១០ ទំព័រផលិតផលដោយផ្ទាល់ និងតំណភ្ជាប់គោលការណ៍ច្បាស់លាស់ បានដាក់ឲ្យប្រើរួចហើយសម្រាប់ការពិនិត្យ និងស្វែងយល់។',
    'Visual Overview': 'ទិដ្ឋភាពសង្ខេប',
    'Cambodia in the digital and AI era': 'កម្ពុជាក្នុងយុគសម័យឌីជីថល និង AI',
    'Khmer-market software for messaging, learning, commerce, and finance.': 'សូហ្វវែរសម្រាប់ទីផ្សារខ្មែរ ផ្នែកផ្ញើសារ ការសិក្សា ពាណិជ្ជកម្ម និងហិរញ្ញវត្ថុ។',
    'Mobile-first': 'ផ្តោតលើទូរស័ព្ទ',
    'Business-ready': 'រួចរាល់សម្រាប់អាជីវកម្ម',
    'Education-led': 'ជំរុញដោយការអប់រំ',
    'Platform Map': 'ផែនទីវេទិកា',
    Business: 'អាជីវកម្ម',
    Student: 'សិស្ស',
    Teacher: 'គ្រូ',
    'Banking Skill': 'ជំនាញធនាគារ',
    'Micro SME': 'Micro SME',
    Lending: 'ឥណទាន',
    'Business Ops': 'ប្រតិបត្តិការអាជីវកម្ម',
    Investment: 'ការវិនិយោគ',
    'Student Portal': 'វេទិកាសិស្ស',
    'Teacher Portal': 'វេទិកាគ្រូ',
    'Banking Skills Academy': 'សាលាជំនាញធនាគារ',
    'Micro-SME Platform': 'វេទិកា Micro-SME',
    'Micro-Lending Platform': 'វេទិកា Micro-Lending',
    'Broadcast messaging.': 'ការផ្សព្វផ្សាយសារជាក្រុម។',
    PayKH: 'PayKH',
    'Payment platform.': 'វេទិកាទូទាត់។',
    'Biz Platform': 'វេទិកា Biz',
    'BIA Marketplace': 'ទីផ្សារ BIA',
    'Fundraising': 'ការរៃអង្គាសមូលនិធិ',
    'BIA for SME fundraising and investor marketplace access': 'BIA សម្រាប់ការរៃអង្គាសមូលនិធិ SME និងការចូលទៅកាន់ទីផ្សារវិនិយោគិន',
    'AI Learning Center': 'មជ្ឈមណ្ឌលសិក្សា AI',
    'Student, teacher, and banking skill learning platform.': 'វេទិកាសិក្សាសម្រាប់សិស្ស គ្រូ និងជំនាញធនាគារ។',
    'Micro-SME + Micro-Lending': 'Micro-SME + Micro-Lending',
    'SME commerce and micro-lending operations.': 'ប្រតិបត្តិការពាណិជ្ជកម្ម SME និងឥណទានខ្នាតតូច។',
    'Customer Reach': 'ការឈានដល់អតិថិជន',
    'WhatsApp, Telegram, and Signal from one business hub.': 'WhatsApp, Telegram និង Signal ពីមជ្ឈមណ្ឌលអាជីវកម្មតែមួយ។',
    Learning: 'ការសិក្សា',
    'Student portal, teacher portal, banking skills, and exam quizzes.': 'វេទិកាសិស្ស វេទិកាគ្រូ ជំនាញធនាគារ និងសំណួរប្រឡង។',
    Operations: 'ប្រតិបត្តិការ',
    'SME + Lending': 'SME + ឥណទាន',
    'Sales, inventory, POS, borrowers, loans, and records.': 'ការលក់ ស្តុក POS អ្នកខ្ចី ប្រាក់កម្ចី និងកំណត់ត្រា។',
    'Merchant Checkout': 'ការទូទាត់របស់អាជីវករ',
    'Digital payment collection, KHQR-ready checkout support, and transaction flow for merchants.':
      'ការប្រមូលការទូទាត់ឌីជីថល ការគាំទ្រការទូទាត់ KHQR-ready និងលំហូរប្រតិបត្តិការសម្រាប់អាជីវករ។',
    'Company Thesis': 'ទិសដៅក្រុមហ៊ុន',
    'CamboBIA is building a focused digital platform portfolio across communication, education, and operational finance.':
      'CamboBIA កំពុងកសាងក្រុមវេទិកាឌីជីថលដែលផ្តោតលើការទំនាក់ទំនង ការអប់រំ និងហិរញ្ញវត្ថុប្រតិបត្តិការ។',
    'The company story is not seven unrelated products. The company story is applied software for markets where business workflows, learning workflows, and operational record-keeping still have large room for digitization.':
      'រឿងរ៉ាវក្រុមហ៊ុនមិនមែនជាផលិតផល ៧ មុខដាច់ពីគ្នាទេ។ វាជាសូហ្វវែរ​ដែលអនុវត្តបានជាក់ស្តែងសម្រាប់ទីផ្សារដែលលំហូរអាជីវកម្ម ការសិក្សា និងកំណត់ត្រាប្រតិបត្តិការនៅតែមានឱកាសធំសម្រាប់ឌីជីថលកម្ម។',
    'The company story is not eight unrelated products. The company story is applied software for markets where business workflows, learning workflows, commerce, payments, and operational record-keeping still have large room for digitization.':
      'រឿងរ៉ាវក្រុមហ៊ុនមិនមែនជាផលិតផល ៨ មុខដាច់ពីគ្នាទេ។ វាជាសូហ្វវែរ​ដែលអនុវត្តបានជាក់ស្តែងសម្រាប់ទីផ្សារដែលលំហូរអាជីវកម្ម ការសិក្សា ពាណិជ្ជកម្ម ការទូទាត់ និងកំណត់ត្រាប្រតិបត្តិការនៅតែមានឱកាសធំសម្រាប់ឌីជីថលកម្ម។',
    'The company story is not nine unrelated products. The company story is applied software for markets where business workflows, learning workflows, commerce, payments, and operational record-keeping still have large room for digitization.':
      'រឿងរ៉ាវក្រុមហ៊ុនមិនមែនជាផលិតផល ៩ មុខដាច់ពីគ្នាទេ។ វាជាសូហ្វវែរ​ដែលអនុវត្តបានជាក់ស្តែងសម្រាប់ទីផ្សារដែលលំហូរអាជីវកម្ម ការសិក្សា ពាណិជ្ជកម្ម ការទូទាត់ និងកំណត់ត្រាប្រតិបត្តិការនៅតែមានឱកាសធំសម្រាប់ឌីជីថលកម្ម។',
    'The company story is not ten unrelated products. The company story is applied software for markets where business workflows, learning workflows, commerce, payments, fundraising access, and operational record-keeping still have large room for digitization.':
      'រឿងរ៉ាវក្រុមហ៊ុនមិនមែនជាផលិតផល ១០ មុខដាច់ពីគ្នាទេ។ វាជាសូហ្វវែរ​ដែលអនុវត្តបានជាក់ស្តែងសម្រាប់ទីផ្សារដែលលំហូរអាជីវកម្ម ការសិក្សា ពាណិជ្ជកម្ម ការទូទាត់ ការចូលដល់ការរៃអង្គាសមូលនិធិ និងកំណត់ត្រាប្រតិបត្តិការនៅតែមានឱកាសធំសម្រាប់ឌីជីថលកម្ម។',
    'Priority 01': 'អាទិភាព ០១',
    'Customer communication': 'ការទំនាក់ទំនងអតិថិជន',
    'Messenger Hub is the clearest growth entry for businesses that already depend on chat-based customer engagement.':
      'Messenger Hub ជាចំណុចចូលសម្រាប់ការលូតលាស់ដ៏ច្បាស់លាស់សម្រាប់អាជីវកម្មដែលពឹងផ្អែកលើការជជែកជាមួយអតិថិជន។',
    'Priority 02': 'អាទិភាព ០២',
    'SME operations': 'ប្រតិបត្តិការ SME',
    'Micro-SME Platform and Micro-Lending Platform address repeatable business operations with clearer software workflows.':
      'វេទិកា Micro-SME និង Micro-Lending ជួយដល់ប្រតិបត្តិការអាជីវកម្មដែលត្រូវធ្វើម្តងហើយម្តងទៀតដោយមានលំហូរសូហ្វវែរច្បាស់លាស់។',
    'Commerce and payments': 'ពាណិជ្ជកម្ម និងការទូទាត់',
    'Micro-SME Platform, PayKH, and Micro-Lending Platform address sales, checkout, and record-heavy financial workflows with clearer software operations.':
      'វេទិកា Micro-SME, PayKH និង Micro-Lending ជួយដល់ការលក់ ការទូទាត់ចុងក្រោយ និងលំហូរការងារហិរញ្ញវត្ថុដែលមានកំណត់ត្រាច្រើន ដោយមានប្រតិបត្តិការសូហ្វវែរច្បាស់លាស់ជាងមុន។',
    'Priority 03': 'អាទិភាព ០៣',
    'Education and training': 'ការអប់រំ និងការបណ្តុះបណ្តាល',
    'AI Learning Center creates a longer-term learning vertical across school and banking-training use cases.':
      'AI Learning Center បង្កើតផ្នែកសិក្សារយៈពេលវែងសម្រាប់សាលារៀន និងការបណ្តុះបណ្តាលវិស័យធនាគារ។',
    'Fundraising and investor access': 'ការរៃអង្គាសមូលនិធិ និងការចូលដល់វិនិយោគិន',
    'BIA adds an advisory marketplace path where SMEs can raise funds and investors can review potential SME opportunities.':
      'BIA បន្ថែមផ្លូវទីផ្សារប្រឹក្សាមួយ ដែល SME អាចរៃអង្គាសមូលនិធិ និងវិនិយោគិនអាចពិនិត្យមើលឱកាស SME ដែលមានសក្តានុពល។',
    'Start Here': 'ចាប់ផ្តើមនៅទីនេះ',
    'Start with the audience, not the software.': 'ចាប់ផ្តើមពីអ្នកប្រើ មិនមែនពីសូហ្វវែរ។',
    'Choose the closest role below and follow the most useful CamboBIA entry point first.':
      'ជ្រើសរើសតួនាទីដែលជិតស្និទ្ធបំផុតខាងក្រោម ហើយចាប់ផ្តើមពីចំណុចចូលរបស់ CamboBIA ដែលមានប្រយោជន៍បំផុត។',
    'Sales teams': 'ក្រុមលក់',
    'Reach customers and capture orders.': 'ឈានដល់អតិថិជន និងទទួលការបញ្ជាទិញ។',
    'Best starting mix: Messenger Hub for campaigns, then Micro-SME Platform for Telegram-led selling.':
      'ការចាប់ផ្តើមល្អបំផុត៖ Messenger Hub សម្រាប់យុទ្ធនាការ បន្ទាប់មក Micro-SME Platform សម្រាប់ការលក់តាម Telegram។',
    'Best starting mix: Messenger Hub for campaigns, Micro-SME Platform for conversational selling, and PayKH for payment completion.':
      'ការចាប់ផ្តើមល្អបំផុត៖ Messenger Hub សម្រាប់យុទ្ធនាការ វេទិកា Micro-SME សម្រាប់ការលក់តាមការសន្ទនា និង PayKH សម្រាប់ការបញ្ចប់ការទូទាត់។',
    'Typical fit: stores, resellers, customer-service teams, and operators who need both outreach and conversation-based selling.':
      'សមស្របសម្រាប់ហាង អ្នកចែកចាយ ក្រុមសេវាកម្មអតិថិជន និងអ្នកប្រតិបត្តិការដែលត្រូវការទាំងការផ្សព្វផ្សាយ និងការលក់តាមការសន្ទនា។',
    'Typical fit: stores, resellers, customer-service teams, and operators who need outreach, conversation-based selling, and a clearer checkout path.':
      'សមស្របសម្រាប់ហាង អ្នកចែកចាយ ក្រុមសេវាកម្មអតិថិជន និងអ្នកប្រតិបត្តិការដែលត្រូវការការផ្សព្វផ្សាយ ការលក់តាមការសន្ទនា និងផ្លូវទូទាត់ដែលច្បាស់លាស់ជាងមុន។',
    'See sales path': 'មើលផ្លូវលក់',
    Schools: 'សាលារៀន',
    'Support students, teachers, and revision.': 'គាំទ្រសិស្ស គ្រូ និងការរៀនត្រៀមប្រឡង។',
    'Best starting mix: Student Portal for learners, Teacher Portal for educators, Pair Me Up for focus.':
      'ការចាប់ផ្តើមល្អបំផុត៖ Student Portal សម្រាប់អ្នកសិក្សា Teacher Portal សម្រាប់គ្រូ និង Pair Me Up សម្រាប់ការផ្តោតអារម្មណ៍។',
    'Typical fit: schools, tutoring centers, families, and programs that need study, oversight, and attention support in one flow.':
      'សមស្របសម្រាប់សាលារៀន មជ្ឈមណ្ឌលបង្រៀនបន្ថែម គ្រួសារ និងកម្មវិធីដែលត្រូវការការសិក្សា ការគ្រប់គ្រង និងការគាំទ្រផ្នែកការផ្តោតអារម្មណ៍ក្នុងលំហូរតែមួយ។',
    'See education path': 'មើលផ្លូវការអប់រំ',
    Banks: 'ធនាគារ',
    'Structure banking learning and knowledge checks.': 'រៀបចំការសិក្សាវិស័យធនាគារ និងការត្រួតពិនិត្យចំណេះដឹង។',
    'Best starting mix: Banking Skills Academy for training, Teacher Portal for management and oversight.':
      'ការចាប់ផ្តើមល្អបំផុត៖ Banking Skills Academy សម្រាប់បណ្តុះបណ្តាល និង Teacher Portal សម្រាប់ការគ្រប់គ្រងនិងត្រួតពិនិត្យ។',
    'Typical fit: HR, compliance, branch training, and leadership teams that need repeatable banking education and progress visibility.':
      'សមស្របសម្រាប់ក្រុម HR ការអនុលោម សាខាធនាគារ និងក្រុមដឹកនាំដែលត្រូវការការអប់រំធនាគារដែលធ្វើឡើងវិញបាន និងមើលឃើញវឌ្ឍនភាព។',
    'See banking path': 'មើលផ្លូវធនាគារ',
    'Lenders and SMEs': 'អ្នកឥណទាន និង SME',
    'Clean up records and daily operations.': 'រៀបចំកំណត់ត្រា និងប្រតិបត្តិការប្រចាំថ្ងៃឲ្យស្អាត។',
    'Best starting mix: Micro-Lending Platform for lending records, Micro-SME Platform for stock, POS, and sales flow.':
      'ការចាប់ផ្តើមល្អបំផុត៖ Micro-Lending Platform សម្រាប់កំណត់ត្រាឥណទាន និង Micro-SME Platform សម្រាប់ស្តុក POS និងលំហូរការលក់។',
    'Best starting mix: Micro-Lending Platform for lending records, Micro-SME Platform for stock and sales flow, and PayKH for merchant collection.':
      'ការចាប់ផ្តើមល្អបំផុត៖ វេទិកា Micro-Lending សម្រាប់កំណត់ត្រាឥណទាន វេទិកា Micro-SME សម្រាប់ស្តុក និងលំហូរការលក់ និង PayKH សម្រាប់ការប្រមូលប្រាក់ពីអាជីវករ។',
    'Typical fit: microfinance operators, trading businesses, and hybrid SMEs that need both commerce tools and structured financial records.':
      'សមស្របសម្រាប់ប្រតិបត្តិករហិរញ្ញវត្ថុខ្នាតតូច អាជីវកម្មជួញដូរ និង SME ដែលរួមបញ្ចូលគ្នាដែលត្រូវការទាំងឧបករណ៍ពាណិជ្ជកម្ម និងកំណត់ត្រាហិរញ្ញវត្ថុដែលមានរបៀបរៀបរយ។',
    'Typical fit: microfinance operators, trading businesses, and hybrid SMEs that need commerce tools, payment support, and structured financial records.':
      'សមស្របសម្រាប់ប្រតិបត្តិករហិរញ្ញវត្ថុខ្នាតតូច អាជីវកម្មជួញដូរ និង SME ចម្រុះដែលត្រូវការឧបករណ៍ពាណិជ្ជកម្ម ការគាំទ្រការទូទាត់ និងកំណត់ត្រាហិរញ្ញវត្ថុដែលមានរបៀបរៀបរយ។',
    'See operations path': 'មើលផ្លូវប្រតិបត្តិការ',
    'SMEs and investors': 'SME និងវិនិយោគិន',
    'Raise funding or review opportunities.': 'រៃអង្គាសមូលនិធិ ឬពិនិត្យឱកាសវិនិយោគ។',
    'Best starting mix: BIA Marketplace for fundraising and investor discovery, then Biz Platform when the business needs wider operating support.':
      'ការចាប់ផ្តើមល្អបំផុត៖ ទីផ្សារ BIA សម្រាប់ការរៃអង្គាសមូលនិធិ និងស្វែងរកវិនិយោគិន បន្ទាប់មកវេទិកា Biz នៅពេលអាជីវកម្មត្រូវការការគាំទ្រប្រតិបត្តិការកាន់តែទូលំទូលាយ។',
    'Typical fit: SMEs preparing to raise capital and investors looking for potential SME opportunities in a more focused marketplace setting.':
      'សមស្របសម្រាប់ SME ដែលកំពុងត្រៀមរៃអង្គាសដើមទុន និងវិនិយោគិនដែលកំពុងស្វែងរកឱកាស SME ក្នុងបរិបទទីផ្សារដែលផ្តោតច្បាស់ជាងមុន។',
    'See marketplace path': 'មើលផ្លូវទីផ្សារ',
    'Recommended Pairings': 'ការផ្គូផ្គងដែលបានណែនាំ',
    'Choose the platform combination that fits your business operation.': 'ជ្រើសរើសការរួមបញ្ចូលវេទិកាដែលសមស្របនឹងប្រតិបត្តិការអាជីវកម្មរបស់អ្នក។',
    'Most organizations get better results by pairing one customer-facing system with one operational or learning system.':
      'អង្គការភាគច្រើនទទួលបានលទ្ធផលល្អជាងមុនពេលផ្គូផ្គងប្រព័ន្ធមួយសម្រាប់អតិថិជនជាមួយប្រព័ន្ធប្រតិបត្តិការ ឬការសិក្សា។',
    'Sales and Orders': 'ការលក់ និងការបញ្ជាទិញ',
    'Recommended Stack': 'សំណុំប្រព័ន្ធណែនាំ',
    'Messenger Hub + Micro-SME Platform': 'Messenger Hub + Micro-SME Platform',
    'Messenger Hub + Micro-SME Platform + PayKH': 'Messenger Hub + Micro-SME Platform + PayKH',
    'Use Messenger Hub to broadcast offers and CXDot to continue the conversation through AI-assisted buying, product inquiry, and order handling.':
      'ប្រើ Messenger Hub ដើម្បីផ្សព្វផ្សាយការផ្តល់ជូន ហើយប្រើ CXDot ដើម្បីបន្តការសន្ទនាតាមរយៈការទិញដោយជំនួយ AI សំណួរអំពីផលិតផល និងការគ្រប់គ្រងការបញ្ជាទិញ។',
    'Use Messenger Hub to broadcast offers, CXDot to continue the conversation through AI-assisted buying and order handling, and PayKH to complete payment collection with a more professional checkout experience.':
      'ប្រើ Messenger Hub ដើម្បីផ្សព្វផ្សាយការផ្តល់ជូន ប្រើ CXDot ដើម្បីបន្តការសន្ទនាតាមរយៈការទិញដោយជំនួយ AI និងការគ្រប់គ្រងការបញ្ជាទិញ ហើយប្រើ PayKH ដើម្បីបញ្ចប់ការប្រមូលប្រាក់ជាមួយបទពិសោធន៍ទូទាត់ដែលមានវិជ្ជាជីវៈជាងមុន។',
    'Best when the business wants one channel for high-volume promotion and another for guided customer conversations that convert into orders.':
      'សមស្របបំផុតពេលអាជីវកម្មត្រូវការឆានែលមួយសម្រាប់ការផ្សព្វផ្សាយទំហំធំ និងឆានែលមួយទៀតសម្រាប់ការសន្ទនាជាមួយអតិថិជនដែលនាំទៅរកការបញ្ជាទិញ។',
    'Best when the business wants one channel for high-volume promotion, another for guided customer conversations, and a dedicated layer for payment completion.':
      'សមស្របបំផុតពេលអាជីវកម្មត្រូវការឆានែលមួយសម្រាប់ការផ្សព្វផ្សាយទំហំធំ ឆានែលមួយទៀតសម្រាប់ការសន្ទនាជាមួយអតិថិជនដែលមានការណែនាំ និងស្រទាប់ឯកទេសសម្រាប់ការបញ្ចប់ការទូទាត់។',
    'Reach customers': 'ឈានដល់អតិថិជន',
    'Capture orders': 'ទទួលការបញ្ជាទិញ',
    'Continue bot conversations': 'បន្តការសន្ទនាតាមបុត',
    'Complete payments': 'បញ្ចប់ការទូទាត់',
    'View Messenger Hub': 'មើល Messenger Hub',
    'View CXDot Stack': 'មើលសំណុំ CXDot',
    'View PayKH': 'មើល PayKH',
    'Commerce and Lending': 'ពាណិជ្ជកម្ម និងឥណទាន',
    'Commerce, Payments, and Lending': 'ពាណិជ្ជកម្ម ការទូទាត់ និងឥណទាន',
    'Micro-SME Platform + Micro-Lending Platform': 'Micro-SME Platform + Micro-Lending Platform',
    'Micro-SME Platform + PayKH + Micro-Lending Platform': 'Micro-SME Platform + PayKH + Micro-Lending Platform',
    'Use CXDot for conversational commerce, trading inquiry, POS, and stock flow, then use DBank for borrower records, repayments, and lending books.':
      'ប្រើ CXDot សម្រាប់ពាណិជ្ជកម្មតាមការសន្ទនា សំណួរជួញដូរ POS និងលំហូរស្តុក បន្ទាប់មកប្រើ DBank សម្រាប់កំណត់ត្រាអ្នកខ្ចី ការសងប្រាក់ និងសៀវភៅឥណទាន។',
    'Use CXDot for conversational commerce, trading inquiry, POS, and stock flow, then use PayKH for transaction collection, and DBank for borrower records, repayments, and lending books.':
      'ប្រើ CXDot សម្រាប់ពាណិជ្ជកម្មតាមការសន្ទនា សំណួរជួញដូរ POS និងលំហូរស្តុក បន្ទាប់មកប្រើ PayKH សម្រាប់ការប្រមូលប្រតិបត្តិការ និងប្រើ DBank សម្រាប់កំណត់ត្រាអ្នកខ្ចី ការសងប្រាក់ និងសៀវភៅឥណទាន។',
    'Best when the same business serves customers through sales and also manages loan, repayment, or borrower operations behind the scenes.':
      'សមស្របបំផុតពេលអាជីវកម្មតែមួយបម្រើអតិថិជនតាមរយៈការលក់ ហើយក៏គ្រប់គ្រងប្រាក់កម្ចី ការសងប្រាក់ ឬប្រតិបត្តិការអ្នកខ្ចីនៅខាងក្រោយផងដែរ។',
    'Best when the same business serves customers through sales, collects payments, and also manages loan, repayment, or borrower operations behind the scenes.':
      'សមស្របបំផុតពេលអាជីវកម្មតែមួយបម្រើអតិថិជនតាមរយៈការលក់ ប្រមូលការទូទាត់ ហើយក៏គ្រប់គ្រងប្រាក់កម្ចី ការសងប្រាក់ ឬប្រតិបត្តិការអ្នកខ្ចីនៅខាងក្រោយផងដែរ។',
    'Sell and trade': 'លក់ និងជួញដូរ',
    'Collect payments': 'ប្រមូលការទូទាត់',
    'Manage lending books': 'គ្រប់គ្រងសៀវភៅឥណទាន',
    'Keep records clean': 'រក្សាកំណត់ត្រាឲ្យស្អាត',
    'View CXDot': 'មើល CXDot',
    'View DBank': 'មើល DBank',
    'Training and Oversight': 'ការបណ្តុះបណ្តាល និងការត្រួតពិនិត្យ',
    'Banking Skills Academy + Teacher Portal': 'Banking Skills Academy + Teacher Portal',
    'Use the Banking Skills Academy for guided training and quizzes, and the Teacher Portal for management, oversight, and learning administration.':
      'ប្រើ Banking Skills Academy សម្រាប់ការបណ្តុះបណ្តាលនិងសំណួរណែនាំ និង Teacher Portal សម្រាប់ការគ្រប់គ្រង ការត្រួតពិនិត្យ និងរដ្ឋបាលការសិក្សា។',
    'Best when an organization needs structured knowledge-building for teams and a management layer to monitor learning quality and completion.':
      'សមស្របបំផុតពេលអង្គការត្រូវការការកសាងចំណេះដឹងដែលមានរចនាសម្ព័ន្ធសម្រាប់ក្រុម និងស្រទាប់គ្រប់គ្រងដើម្បីតាមដានគុណភាពនិងការបញ្ចប់ការសិក្សា។',
    'Train teams': 'បណ្តុះបណ្តាលក្រុម',
    'Track progress': 'តាមដានវឌ្ឍនភាព',
    'Improve oversight': 'បង្កើនការត្រួតពិនិត្យ',
    'View Banking Skills': 'មើលជំនាញធនាគារ',
    'View Teacher Portal': 'មើលវេទិកាគ្រូ',
    'Students and Focus': 'សិស្ស និងការផ្តោតអារម្មណ៍',
    'Student Portal + Pair Me Up': 'Student Portal + Pair Me Up',
    'Use the Student Portal for curriculum and quizzes, then Pair Me Up to support concentration, focus, and memory practice.':
      'ប្រើ Student Portal សម្រាប់កម្មវិធីសិក្សា និងសំណួរ បន្ទាប់មក Pair Me Up ដើម្បីគាំទ្រការផ្តោតអារម្មណ៍ និងការហ្វឹកហាត់ការចងចាំ។',
    'Best when learners need both academic content and simple focus-building activities that keep revision sessions more consistent.':
      'សមស្របបំផុតពេលអ្នកសិក្សាត្រូវការទាំងមាតិកាសិក្សា និងសកម្មភាពសាមញ្ញសម្រាប់បង្កើនការផ្តោតអារម្មណ៍ ដែលធ្វើឲ្យវគ្គរៀនត្រៀមប្រឡងមានស្ថេរភាពជាងមុន។',
    'Study better': 'សិក្សាបានល្អជាងមុន',
    'Practice quizzes': 'ហ្វឹកហាត់សំណួរ',
    'Build focus': 'បង្កើនការផ្តោតអារម្មណ៍',
    'View Student Portal': 'មើលវេទិកាសិស្ស',
    'View Pair Me Up': 'មើល Pair Me Up',
    'Solution Navigator': 'មគ្គុទ្ទេសក៍ដំណោះស្រាយ',
    'Pick your role.': 'ជ្រើសរើសតួនាទីរបស់អ្នក។',
    'Use the role view below to find the shortest path into the right CamboBIA products.':
      'ប្រើការមើលតាមតួនាទីខាងក្រោម ដើម្បីស្វែងរកផ្លូវខ្លីបំផុតទៅកាន់ផលិតផល CamboBIA ដែលត្រឹមត្រូវ។',
    'Sales and Marketing': 'ការលក់ និងទីផ្សារ',
    'Schools and Students': 'សាលារៀន និងសិស្ស',
    'Banks and Training': 'ធនាគារ និងការបណ្តុះបណ្តាល',
    'Micro Lenders and SMEs': 'អ្នកឥណទានខ្នាតតូច និង SME',
    'For customer outreach, messaging campaigns, conversational selling, and stronger order flow from first contact to checkout.':
      'សម្រាប់ការឈានដល់អតិថិជន យុទ្ធនាការផ្ញើសារ ការលក់តាមការសន្ទនា និងលំហូរការបញ្ជាទិញដែលរឹងមាំជាងមុនចាប់ពីការទាក់ទងដំបូងរហូតដល់ការទូទាត់។',
    'Messenger Hub and the Micro-SME Platform create a simple front-to-back sales path for outreach, product inquiry, and order capture.':
      'Messenger Hub និងវេទិកា Micro-SME បង្កើតផ្លូវលក់សាមញ្ញពីមុខរហូតដល់ក្រោយសម្រាប់ការផ្សព្វផ្សាយ សំណួរអំពីផលិតផល និងការទទួលការបញ្ជាទិញ។',
    'Start with Messenger Hub for campaigns, promotions, and announcements, then let CXDot handle AI-led product questions, guided buying, and order conversations.':
      'ចាប់ផ្តើមជាមួយ Messenger Hub សម្រាប់យុទ្ធនាការ ប្រូម៉ូសិន និងសេចក្តីជូនដំណឹង បន្ទាប់មកឲ្យ CXDot គ្រប់គ្រងសំណួរផលិតផលដោយជំនួយ AI ការទិញដែលមានការណែនាំ និងការសន្ទនាអំពីការបញ្ជាទិញ។',
    'Improve customer reach, generate more response, capture more orders, and give operators better visibility into sales activity across channels.':
      'បង្កើនការឈានដល់អតិថិជន បង្កើនការឆ្លើយតប ទទួលបានការបញ្ជាទិញកាន់តែច្រើន និងផ្តល់ឲ្យអ្នកប្រតិបត្តិការមើលឃើញសកម្មភាពលក់កាន់តែច្បាស់តាមឆានែលផ្សេងៗ។',
    'Begin with one campaign use case, define how replies should be handled, and then connect the sales conversation flow to CXDot for follow-through.':
      'ចាប់ផ្តើមពីករណីប្រើប្រាស់យុទ្ធនាការមួយ កំណត់របៀបដោះស្រាយការឆ្លើយតប ហើយបន្ទាប់មកភ្ជាប់លំហូរការសន្ទនាលក់ទៅកាន់ CXDot សម្រាប់ការបន្តការងារ។',
    'Best fit organizations': 'អង្គការដែលសមស្របបំផុត',
    'Good for retailers, service businesses, distributors, schools, training teams, and customer-facing operators that sell through messaging.':
      'សមស្របសម្រាប់ហាងលក់រាយ អាជីវកម្មសេវាកម្ម អ្នកចែកចាយ សាលារៀន ក្រុមបណ្តុះបណ្តាល និងអ្នកប្រតិបត្តិការដែលលក់តាមរយៈការផ្ញើសារ។',
    'Why this combination works': 'ហេតុអ្វីការរួមបញ្ចូលនេះមានប្រសិទ្ធភាព',
    'One product helps you reach people at scale, while the other keeps the conversation useful enough to convert interest into action and orders.':
      'ផលិតផលមួយជួយអ្នកឲ្យឈានដល់មនុស្សជាច្រើន ខណៈដែលមួយទៀតធ្វើឲ្យការសន្ទនាមានប្រយោជន៍គ្រប់គ្រាន់ដើម្បីបម្លែងចំណាប់អារម្មណ៍ឲ្យទៅជាសកម្មភាព និងការបញ្ជាទិញ។',
    'For students, teachers, revision, quizzes, focus practice, and clearer day-to-day learning support.':
      'សម្រាប់សិស្ស គ្រូ ការរៀនត្រៀមប្រឡង សំណួរ ការហ្វឹកហាត់ការផ្តោតអារម្មណ៍ និងការគាំទ្រការសិក្សាប្រចាំថ្ងៃដែលកាន់តែច្បាស់។',
    'AI Learning Center, Student Portal, Teacher Portal, and Pair Me Up support structured study, classroom oversight, and focus-building activities.':
      'AI Learning Center, Student Portal, Teacher Portal និង Pair Me Up គាំទ្រការសិក្សាដែលមានរចនាសម្ព័ន្ធ ការត្រួតពិនិត្យថ្នាក់រៀន និងសកម្មភាពបង្កើនការផ្តោតអារម្មណ៍។',
    'Use the Student Portal for lessons, quizzes, and revision, then Pair Me Up for focus support, with Teacher Portal oversight when teachers need visibility and control.':
      'ប្រើ Student Portal សម្រាប់មេរៀន សំណួរ និងការរៀនត្រៀមប្រឡង បន្ទាប់មកប្រើ Pair Me Up សម្រាប់គាំទ្រការផ្តោតអារម្មណ៍ ដោយមាន Teacher Portal សម្រាប់ការត្រួតពិនិត្យនៅពេលគ្រូត្រូវការមើលឃើញ និងគ្រប់គ្រង។',
    'Strengthen study routines, improve revision consistency, and give teachers and families a clearer structure around learner progress and support.':
      'ពង្រឹងទម្លាប់សិក្សា បង្កើនស្ថិរភាពនៃការរៀនត្រៀមប្រឡង និងផ្តល់រចនាសម្ព័ន្ធច្បាស់លាស់ជាងមុនដល់គ្រូ និងគ្រួសារ ជុំវិញវឌ្ឍនភាព និងការគាំទ្រអ្នកសិក្សា។',
    'Start with one subject or quiz path, then add focus-based practice and teacher oversight where learners need more consistency.':
      'ចាប់ផ្តើមជាមួយមុខវិជ្ជាមួយ ឬផ្លូវសំណួរមួយ បន្ទាប់មកបន្ថែមការហ្វឹកហាត់ផ្អែកលើការផ្តោតអារម្មណ៍ និងការត្រួតពិនិត្យរបស់គ្រូ នៅកន្លែងដែលអ្នកសិក្សាត្រូវការស្ថិរភាពបន្ថែម។',
    'Good for schools, tutoring programs, student communities, education projects, and families that want both study tools and learning structure.':
      'សមស្របសម្រាប់សាលារៀន កម្មវិធីបង្រៀនបន្ថែម សហគមន៍សិស្ស គម្រោងអប់រំ និងគ្រួសារដែលចង់បានទាំងឧបករណ៍សិក្សា និងរចនាសម្ព័ន្ធការសិក្សា។',
    'Academic learning improves when curriculum, practice, supervision, and concentration support are treated as one connected experience instead of separate tools.':
      'ការសិក្សាផ្នែកអប់រំកាន់តែប្រសើរនៅពេលកម្មវិធីសិក្សា ការហ្វឹកហាត់ ការត្រួតពិនិត្យ និងការគាំទ្រការផ្តោតអារម្មណ៍ ត្រូវបានដាក់ជាបទពិសោធន៍តភ្ជាប់គ្នាមួយ ជំនួសឲ្យឧបករណ៍ដាច់ដោយឡែក។',
    'For banking training, knowledge checks, staff preparation, and clearer progress tracking across teams.':
      'សម្រាប់ការបណ្តុះបណ្តាលវិស័យធនាគារ ការត្រួតពិនិត្យចំណេះដឹង ការរៀបចំបុគ្គលិក និងការតាមដានវឌ្ឍនភាពកាន់តែច្បាស់នៅទូទាំងក្រុម។',
    'AI Learning Center and Banking Skills Academy provide structured training content, guided quizzes, and a dedicated learning path for financial institutions.':
      'AI Learning Center និង Banking Skills Academy ផ្តល់មាតិកាបណ្តុះបណ្តាលដែលមានរចនាសម្ព័ន្ធ សំណួរដែលមានការណែនាំ និងផ្លូវសិក្សាផ្តាច់មុខសម្រាប់ស្ថាប័នហិរញ្ញវត្ថុ។',
    'Pair Banking Skills Academy with the Teacher Portal when a team needs structured learning delivery together with administrative visibility, review, and oversight.':
      'ផ្គូផ្គង Banking Skills Academy ជាមួយ Teacher Portal នៅពេលក្រុមត្រូវការការផ្តល់ការសិក្សាដែលមានរចនាសម្ព័ន្ធ ជាមួយនឹងការមើលឃើញ រដ្ឋបាល ការពិនិត្យ និងការត្រួតពិនិត្យ។',
    'Improve training structure, increase exam readiness, and make progress easier to track across branches, departments, or learner groups.':
      'បង្កើនរចនាសម្ព័ន្ធបណ្តុះបណ្តាល បង្កើនការត្រៀមខ្លួនសម្រាប់ប្រឡង និងធ្វើឲ្យវឌ្ឍនភាពងាយស្រួលតាមដាននៅទូទាំងសាខា ផ្នែក ឬក្រុមអ្នកសិក្សា។',
    'Start with one internal training track, assign quizzes to the relevant team, and use the Teacher Portal to review completion and quality.':
      'ចាប់ផ្តើមជាមួយផ្លូវបណ្តុះបណ្តាលផ្ទៃក្នុងមួយ កំណត់សំណួរទៅកាន់ក្រុមពាក់ព័ន្ធ ហើយប្រើ Teacher Portal ដើម្បីពិនិត្យការបញ្ចប់ និងគុណភាព។',
    'Good for banks, microfinance institutions, training departments, compliance teams, and managers who need repeatable knowledge development.':
      'សមស្របសម្រាប់ធនាគារ ស្ថាប័នហិរញ្ញវត្ថុខ្នាតតូច ផ្នែកបណ្តុះបណ្តាល ក្រុមអនុលោម និងអ្នកគ្រប់គ្រងដែលត្រូវការការអភិវឌ្ឍចំណេះដឹងដែលធ្វើឡើងវិញបាន។',
    'Training becomes more valuable when content delivery, testing, and oversight are linked together rather than managed through disconnected internal processes.':
      'ការបណ្តុះបណ្តាលកាន់តែមានតម្លៃនៅពេលការផ្តល់មាតិកា ការធ្វើតេស្ត និងការត្រួតពិនិត្យត្រូវបានភ្ជាប់ជាមួយគ្នា ជំនួសឲ្យការគ្រប់គ្រងតាមដំណើរការផ្ទៃក្នុងដែលបែកចេញពីគ្នា។',
    'For borrower records, lending books, stock control, sales flow, and day-to-day operating discipline.':
      'សម្រាប់កំណត់ត្រាអ្នកខ្ចី សៀវភៅឥណទាន ការគ្រប់គ្រងស្តុក លំហូរការលក់ និងវិន័យប្រតិបត្តិការប្រចាំថ្ងៃ។',
    'Micro-Lending Platform and Micro-SME Platform support lending operations, commerce flow, stock visibility, and more organized record-keeping.':
      'វេទិកា Micro-Lending និង Micro-SME គាំទ្រប្រតិបត្តិការឥណទាន លំហូរពាណិជ្ជកម្ម ការមើលឃើញស្តុក និងការរក្សាកំណត់ត្រាឲ្យមានរបៀបរៀបរយជាងមុន។',
    'Use CXDot for AI-assisted commerce, gold or FX inquiry, and customer bot flow, then use DBank for loan records, borrower management, and repayment operations.':
      'ប្រើ CXDot សម្រាប់ពាណិជ្ជកម្មដោយជំនួយ AI សំណួរអំពីមាស ឬ FX និងលំហូរបុតអតិថិជន បន្ទាប់មកប្រើ DBank សម្រាប់កំណត់ត្រាប្រាក់កម្ចី ការគ្រប់គ្រងអ្នកខ្ចី និងប្រតិបត្តិការសងប្រាក់។',
    'Keep cleaner records, reduce operating friction, and make it easier to manage both customer-facing trade activity and back-office lending work.':
      'រក្សាកំណត់ត្រាឲ្យស្អាតជាងមុន កាត់បន្ថយភាពរអាក់រអួលក្នុងប្រតិបត្តិការ និងធ្វើឲ្យការគ្រប់គ្រងទាំងសកម្មភាពជួញដូរដែលប៉ះពាល់អតិថិជន និងការងារឥណទានខាងក្រោយកាន់តែងាយស្រួល។',
    'Start with the workflow that causes the most daily pain first, then add the second system to connect customer transactions with financial records.':
      'ចាប់ផ្តើមជាមួយលំហូរការងារដែលបង្កការលំបាកប្រចាំថ្ងៃខ្លាំងបំផុតជាមុន បន្ទាប់មកបន្ថែមប្រព័ន្ធទីពីរ ដើម្បីភ្ជាប់ប្រតិបត្តិការអតិថិជនជាមួយកំណត់ត្រាហិរញ្ញវត្ថុ។',
    'Good for micro lenders, hybrid SMEs, trading businesses, community finance operators, and teams handling both sales and borrower relationships.':
      'សមស្របសម្រាប់អ្នកឥណទានខ្នាតតូច SME រួមបញ្ចូលគ្នា អាជីវកម្មជួញដូរ អ្នកប្រតិបត្តិការហិរញ្ញវត្ថុសហគមន៍ និងក្រុមដែលគ្រប់គ្រងទាំងការលក់ និងទំនាក់ទំនងជាមួយអ្នកខ្ចី។',
    'It gives one organization a way to manage front-office customer interaction and back-office financial discipline without splitting operations into unrelated tools.':
      'វាផ្តល់ឲ្យអង្គការមួយនូវវិធីសាស្ត្រគ្រប់គ្រងទាំងការទំនាក់ទំនងអតិថិជនខាងមុខ និងវិន័យហិរញ្ញវត្ថុខាងក្រោយ ដោយមិនចែកប្រតិបត្តិការទៅជាឧបករណ៍ដាច់ដោយឡែកដែលមិនពាក់ព័ន្ធគ្នា។',
    'Who It Serves': 'អ្នកដែលយើងបម្រើ',
    'Different products, one clear goal: make work and learning easier.':
      'ផលិតផលខុសៗគ្នា ប៉ុន្តែគោលដៅមួយច្បាស់លាស់៖ ធ្វើឲ្យការងារ និងការសិក្សាងាយស្រួលជាងមុន។',
    'Contact CamboBIA': 'ទំនាក់ទំនង CamboBIA',
    'Talk to the team about product demos, deployment, partnerships, or business use.':
      'និយាយជាមួយក្រុមការងារអំពីការបង្ហាញផលិតផល ការដាក់ប្រើ ភាពជាដៃគូ ឬការប្រើប្រាស់អាជីវកម្ម។',
    'Review policies first': 'មើលគោលការណ៍ជាមុន',
    Company: 'ក្រុមហ៊ុន',
    'Business And Finance': 'អាជីវកម្ម និងហិរញ្ញវត្ថុ',
    'Education Platforms': 'វេទិកាអប់រំ',
    'Trust And Legal': 'ទំនុកចិត្ត និងផ្នែកច្បាប់',
    Updates: 'បច្ចុប្បន្នភាព',
    'Public-facing policy pages are available so customers and partners can review use, privacy, and data-handling expectations before engagement.':
      'ទំព័រគោលការណ៍សាធារណៈមានរួចជាស្រេច ដើម្បីឲ្យអតិថិជន និងដៃគូអាចពិនិត្យការប្រើប្រាស់ ភាពឯកជន និងការរំពឹងទុកអំពីការគ្រប់គ្រងទិន្នន័យ មុនពេលចូលរួម។',
    'All rights reserved.': 'រក្សាសិទ្ធិគ្រប់យ៉ាង។',
    'Back to Home': 'ត្រឡប់ទៅទំព័រដើម',
    'Product Portfolio': 'ក្រុមផលិតផល',
    'Pick the area you care about.': 'ជ្រើសតំបន់ដែលអ្នកចាប់អារម្មណ៍។',
    'Each product has one clear role inside the CamboBIA platform family.': 'ផលិតផលនីមួយៗមានតួនាទីច្បាស់លាស់មួយនៅក្នុងគ្រួសារវេទិកា CamboBIA។',
    'Payment Platform': 'វេទិកាទូទាត់',
    'Learning Platform': 'វេទិកាសិក្សា',
    'Messenger Hub for customer campaigns and updates.': 'Messenger Hub សម្រាប់យុទ្ធនាការអតិថិជន និងការធ្វើបច្ចុប្បន្នភាព។',
    'Broadcast to WhatsApp, Telegram, and Signal': 'ផ្សព្វផ្សាយទៅកាន់ WhatsApp, Telegram និង Signal',
    'Send promotions and announcements': 'ផ្ញើប្រូម៉ូសិន និងសេចក្តីជូនដំណឹង',
    'Reduce manual messaging work': 'កាត់បន្ថយការងារផ្ញើសារដោយដៃ',
    'Best for: sales, outreach, customer updates': 'សមស្របសម្រាប់៖ ការលក់ ការផ្សព្វផ្សាយ និងការធ្វើបច្ចុប្បន្នភាពអតិថិជន',
    'Typical business uses': 'ការប្រើប្រាស់អាជីវកម្មទូទៅ',
    'Launch promotions, announce branch updates, remind customers, and keep sales teams aligned on outbound campaigns.':
      'ប្រើសម្រាប់បើកយុទ្ធនាការប្រូម៉ូសិន ប្រកាសព័ត៌មានសាខា រំលឹកអតិថិជន និងឲ្យក្រុមលក់ធ្វើការផ្សព្វផ្សាយបានស្របគ្នា។',
    'Recommended pairing': 'ការផ្គូផ្គងដែលណែនាំ',
    'Pair Messenger Hub with the Micro-SME Platform when you want broadcast reach first, then AI-assisted order conversations after the customer replies.':
      'ផ្គូផ្គង Messenger Hub ជាមួយវេទិកា Micro-SME នៅពេលអ្នកចង់ផ្សព្វផ្សាយឲ្យដល់អតិថិជនជាមុន ហើយបន្ទាប់មកបន្តការសន្ទនាការបញ្ជាទិញដោយជំនួយ AI បន្ទាប់ពីអតិថិជនឆ្លើយតប។',
    'Fits best': 'សមស្របបំផុតសម្រាប់',
    'Retailers, schools, banks, distributors, and service teams.':
      'ហាងលក់រាយ សាលារៀន ធនាគារ អ្នកចែកចាយ និងក្រុមសេវាកម្ម។',
    'Primary outcome': 'លទ្ធផលសំខាន់',
    'Faster outreach with more consistent customer follow-up.':
      'ការឈានដល់អតិថិជនលឿនជាងមុន ជាមួយការតាមដានអតិថិជនដែលមានស្ថិរភាពជាងមុន។',
    'Learn more': 'ស្វែងយល់បន្ថែម',
    'Visit Messenger Hub': 'ចូលទៅ Messenger Hub',
    'Learning tools for students, teachers, and banking teams.': 'ឧបករណ៍សិក្សាសម្រាប់សិស្ស គ្រូ និងក្រុមធនាគារ។',
    'Student Portal for exam practice': 'Student Portal សម្រាប់ហ្វឹកហាត់ប្រឡង',
    'Teacher Portal for class management': 'Teacher Portal សម្រាប់គ្រប់គ្រងថ្នាក់រៀន',
    'Banking Skills Academy for industry learning': 'Banking Skills Academy សម្រាប់ការសិក្សាវិស័យធនាគារ',
    'Typical education uses': 'ការប្រើប្រាស់អប់រំទូទៅ',
    'Support grade 2 to grade 12 study, teacher oversight, curriculum-aligned quizzes, and banking-industry training from one connected learning family.':
      'គាំទ្រការសិក្សាពីថ្នាក់ទី ២ ដល់ថ្នាក់ទី ១២ ការត្រួតពិនិត្យរបស់គ្រូ សំណួរដែលស្របតាមកម្មវិធីសិក្សា និងការបណ្តុះបណ្តាលវិស័យធនាគារ ពីគ្រួសារសិក្សាដែលតភ្ជាប់គ្នាមួយ។',
    'Start with the Student Portal for learner activity, add the Teacher Portal for class control, and use the Banking Skills Academy when structured institutional training is needed.':
      'ចាប់ផ្តើមពី Student Portal សម្រាប់សកម្មភាពអ្នកសិក្សា បន្ថែម Teacher Portal សម្រាប់ការគ្រប់គ្រងថ្នាក់ ហើយប្រើ Banking Skills Academy នៅពេលត្រូវការការបណ្តុះបណ្តាលស្ថាប័នដែលមានរចនាសម្ព័ន្ធ។',
    'Schools, tutoring programs, teacher teams, families, and banking training departments.':
      'សាលារៀន កម្មវិធីបង្រៀនបន្ថែម ក្រុមគ្រូ គ្រួសារ និងផ្នែកបណ្តុះបណ្តាលធនាគារ។',
    'Clearer study, stronger oversight, and a more organized learning experience across audiences.':
      'ការសិក្សាច្បាស់លាស់ជាងមុន ការត្រួតពិនិត្យកាន់តែខ្លាំង និងបទពិសោធន៍សិក្សាដែលមានរបៀបរៀបរយជាងមុនសម្រាប់អ្នកប្រើគ្រប់ក្រុម។',
    'Learning center': 'មជ្ឈមណ្ឌលសិក្សា',
    'Student portal page': 'ទំព័រវេទិកាសិស្ស',
    'Teacher portal page': 'ទំព័រវេទិកាគ្រូ',
    'Banking skills page': 'ទំព័រជំនាញធនាគារ',
    'AI-assisted conversational commerce for sales, trading, support, and checkout.': 'ពាណិជ្ជកម្មតាមការសន្ទនាដោយជំនួយ AI សម្រាប់ការលក់ ការជួញដូរ ការគាំទ្រ និងការទូទាត់។',
    'Let customers buy through conversational bots': 'អនុញ្ញាតឲ្យអតិថិជនទិញតាមរយៈ bot សន្ទនា',
    'Support gold, FX, and sales inquiries': 'គាំទ្រសំណួរអំពីមាស FX និងការលក់',
    'Handle stock, POS, and guided financial conversations': 'គ្រប់គ្រងស្តុក POS និងការសន្ទនាហិរញ្ញវត្ថុដែលមានការណែនាំ',
    'Handle AI-led product questions, sales conversations, gold and FX inquiries, bot-assisted trade, stock flow, and checkout operations for small merchants.':
      'គ្រប់គ្រងសំណួរផលិតផលដោយជំនួយ AI ការសន្ទនាលក់ សំណួរអំពីមាស និង FX ការជួញដូរដោយជំនួយ bot លំហូរស្តុក និងប្រតិបត្តិការទូទាត់ចុងក្រោយសម្រាប់អាជីវករខ្នាតតូច។',
    'Pair CXDot with Messenger Hub for customer acquisition first, then add PayKH when the same customer flow needs payment completion and merchant checkout support.':
      'ផ្គូផ្គង CXDot ជាមួយ Messenger Hub សម្រាប់ការទទួលបានអតិថិជនជាមុនសិន បន្ទាប់មកបន្ថែម PayKH នៅពេលលំហូរអតិថិជនដូចគ្នាត្រូវការការបញ្ចប់ការទូទាត់ និងការគាំទ្រការទូទាត់របស់អាជីវករ។',
    'Retailers, trading businesses, AI-led merchants, and SMEs with sales, support, and stock workflows.':
      'ហាងលក់រាយ អាជីវកម្មជួញដូរ អាជីវករដឹកនាំដោយ AI និង SME ដែលមានលំហូរការងារលក់ ការគាំទ្រ និងស្តុក។',
    'Convert customer conversations into structured orders and day-to-day operating actions.':
      'បម្លែងការសន្ទនាជាមួយអតិថិជនទៅជាការបញ្ជាទិញដែលមានរចនាសម្ព័ន្ធ និងសកម្មភាពប្រតិបត្តិការប្រចាំថ្ងៃ។',
    'Best for: micro-SMEs, conversational commerce, AI-led customer engagement':
      'សមស្របសម្រាប់៖ អាជីវកម្មខ្នាតតូច ពាណិជ្ជកម្មតាមការសន្ទនា និងការចូលរួមអតិថិជនដោយ AI',
    'Visit Micro-SME Platform': 'ចូលទៅវេទិកា Micro-SME',
    'Micro-lending platform for borrower and loan records.': 'វេទិកាឥណទានខ្នាតតូចសម្រាប់កំណត់ត្រាអ្នកខ្ចី និងប្រាក់កម្ចី។',
    'Manage borrower profiles': 'គ្រប់គ្រងប្រវត្តិអ្នកខ្ចី',
    'Track loans and repayments': 'តាមដានប្រាក់កម្ចី និងការសងប្រាក់',
    'Keep lending books organized': 'រក្សាសៀវភៅឥណទានឲ្យមានរបៀបរៀបរយ',
    'Typical lending uses': 'ការប្រើប្រាស់ឥណទានទូទៅ',
    'Keep borrower profiles, loan books, repayment follow-up, and lending records more organized in daily operator workflows.':
      'រក្សាប្រវត្តិអ្នកខ្ចី សៀវភៅឥណទាន ការតាមដានការសងប្រាក់ និងកំណត់ត្រាឥណទានឲ្យមានរបៀបរៀបរយជាងមុន ក្នុងលំហូរការងារប្រចាំថ្ងៃរបស់អ្នកប្រតិបត្តិការ។',
    'Pair DBank with CXDot when the same organization manages sales or trading activity, and add PayKH when collection flow also needs a visible payment layer.':
      'ផ្គូផ្គង DBank ជាមួយ CXDot នៅពេលអង្គការដូចគ្នាគ្រប់គ្រងសកម្មភាពលក់ ឬជួញដូរ ហើយបន្ថែម PayKH នៅពេលលំហូរប្រមូលប្រាក់ក៏ត្រូវការស្រទាប់ការទូទាត់ដែលមើលឃើញបានផងដែរ។',
    'Micro lenders, credit operators, finance teams, and hybrid SMEs with borrower-facing workflows.':
      'អ្នកឥណទានខ្នាតតូច អ្នកប្រតិបត្តិឥណទាន ក្រុមហិរញ្ញវត្ថុ និង SME ចម្រុះដែលមានលំហូរការងារប៉ះពាល់អ្នកខ្ចី។',
    'Cleaner records, more reliable follow-up, and stronger operational discipline in lending activity.':
      'កំណត់ត្រាស្អាតជាងមុន ការតាមដានដែលទុកចិត្តបានជាងមុន និងវិន័យប្រតិបត្តិការកាន់តែខ្លាំងក្នុងសកម្មភាពឥណទាន។',
    'Best for: micro lenders, borrower tracking, loan books': 'សមស្របសម្រាប់៖ អ្នកឥណទានខ្នាតតូច ការតាមដានអ្នកខ្ចី និងសៀវភៅឥណទាន',
    'Visit Micro-Lending Platform': 'ចូលទៅវេទិកា Micro-Lending',
    'Memory game for focus and attention practice.': 'ហ្គេមចងចាំសម្រាប់ហ្វឹកហាត់ការផ្តោតអារម្មណ៍ និងការយកចិត្តទុកដាក់។',
    'Train recall with matching play': 'ហ្វឹកហាត់ការចងចាំតាមរយៈការផ្គូផ្គង',
    'Browser-based and simple to access': 'ប្រើបានតាម browser និងចូលប្រើបានងាយ',
    'Works alongside learning activities': 'ដំណើរការជាមួយសកម្មភាពសិក្សាបានល្អ',
    'Typical learning uses': 'ការប្រើប្រាស់សិក្សាទូទៅ',
    'Use Pair Me Up as a light support activity during revision, study breaks, attention practice, and family-led learning routines.':
      'ប្រើ Pair Me Up ជាសកម្មភាពគាំទ្រស្រាលមួយក្នុងអំឡុងពេលរៀនត្រៀមប្រឡង ពេលសម្រាកពីការសិក្សា ការហ្វឹកហាត់ការផ្តោតអារម្មណ៍ និងទម្លាប់សិក្សាដឹកនាំដោយគ្រួសារ។',
    'Pair the game with the Student Portal when learners need curriculum and quiz practice first, then a simple focus-support tool to reinforce consistency.':
      'ផ្គូផ្គងហ្គេមនេះជាមួយ Student Portal នៅពេលអ្នកសិក្សាត្រូវការកម្មវិធីសិក្សា និងការហ្វឹកហាត់សំណួរជាមុនសិន បន្ទាប់មកឧបករណ៍គាំទ្រការផ្តោតអារម្មណ៍សាមញ្ញមួយ ដើម្បីពង្រឹងស្ថិរភាព។',
    'Students, families, tutoring programs, and schools that want a low-friction focus activity.':
      'សិស្ស គ្រួសារ កម្មវិធីបង្រៀនបន្ថែម និងសាលារៀនដែលចង់បានសកម្មភាពផ្តោតអារម្មណ៍ដែលប្រើបានងាយ។',
    'Support concentration, recall, and repeatable study habits through accessible play.':
      'គាំទ្រការផ្តោតអារម្មណ៍ ការចងចាំ និងទម្លាប់សិក្សាដែលធ្វើឡើងវិញបាន តាមរយៈការលេងដែលចូលប្រើបានងាយ។',
    'Best for: learning support, focus, memory practice': 'សមស្របសម្រាប់៖ ការគាំទ្រការសិក្សា ការផ្តោតអារម្មណ៍ និងការហ្វឹកហាត់ការចងចាំ',
    'Play Pair Me Up': 'លេង Pair Me Up',
    'Digital payment platform for merchant payment flow, transaction support, and checkout operations.':
      'វេទិកាទូទាត់ឌីជីថលសម្រាប់លំហូរការទូទាត់របស់អាជីវករ ការគាំទ្រប្រតិបត្តិការ និងប្រតិបត្តិការទូទាត់ចុងក្រោយ។',
    'Support digital payment collection workflows': 'គាំទ្រលំហូរការងារប្រមូលការទូទាត់ឌីជីថល',
    'Fit alongside commerce and merchant operations': 'ដំណើរការជាមួយពាណិជ្ជកម្ម និងប្រតិបត្តិការអាជីវករ',
    'Fit alongside commerce, merchant operations, and KHQR-ready checkout':
      'ដំណើរការជាមួយពាណិជ្ជកម្ម ប្រតិបត្តិការអាជីវករ និងការទូទាត់ KHQR-ready',
    'Extend customer-facing transaction capability': 'ពង្រីកសមត្ថភាពប្រតិបត្តិការដែលប៉ះពាល់អតិថិជន',
    'Extend customer-facing transaction capability with clearer settlement flow':
      'ពង្រីកសមត្ថភាពប្រតិបត្តិការដែលប៉ះពាល់អតិថិជន ជាមួយលំហូរទូទាត់ដែលច្បាស់លាស់ជាងមុន',
    'Use PayKH for merchant checkout, payment acceptance, transaction flow support, and a more professional digital collection experience.':
      'ប្រើ PayKH សម្រាប់ការទូទាត់របស់អាជីវករ ការទទួលការទូទាត់ ការគាំទ្រលំហូរប្រតិបត្តិការ និងបទពិសោធន៍ប្រមូលប្រាក់ឌីជីថលដែលមានវិជ្ជាជីវៈជាងមុន។',
    'Pair PayKH with the Micro-SME Platform when the business needs conversational selling first, then a cleaner payment and checkout layer once the customer is ready to pay.':
      'ផ្គូផ្គង PayKH ជាមួយវេទិកា Micro-SME នៅពេលអាជីវកម្មត្រូវការការលក់តាមការសន្ទនាជាមុនសិន បន្ទាប់មកស្រទាប់ការទូទាត់ និង checkout ដែលស្អាតជាងមុន នៅពេលអតិថិជនត្រៀមរួចសម្រាប់ការបង់ប្រាក់។',
    'Merchants, retailers, service operators, and SMEs that want payment collection to match the quality of their customer journey.':
      'អាជីវករ ហាងលក់រាយ អ្នកប្រតិបត្តិសេវាកម្ម និង SME ដែលចង់ឲ្យការប្រមូលប្រាក់សមនឹងគុណភាពនៃដំណើរអតិថិជនរបស់ពួកគេ។',
    'Cleaner checkout flow, stronger payment confidence, and better alignment between sales activity and collection.':
      'លំហូរទូទាត់ចុងក្រោយស្អាតជាងមុន ទំនុកចិត្តលើការទូទាត់កាន់តែខ្លាំង និងការសម្របសម្រួលប្រសើរជាងមុនរវាងសកម្មភាពលក់ និងការប្រមូលប្រាក់។',
    'Best for: payments, merchant checkout, transaction flow': 'សមស្របសម្រាប់៖ ការទូទាត់ ការទូទាត់ចុងក្រោយរបស់អាជីវករ និងលំហូរប្រតិបត្តិការ',
    'Visit PayKH': 'ចូលទៅ PayKH',
    'Advisory Marketplace': 'ទីផ្សារប្រឹក្សា',
    'Advisory marketplace for SMEs to raise funds and for investors to discover potential SME opportunities.':
      'ទីផ្សារប្រឹក្សាសម្រាប់ SME រៃអង្គាសមូលនិធិ និងសម្រាប់វិនិយោគិនស្វែងរកឱកាស SME ដែលមានសក្តានុពល។',
    'Help SMEs present fundraising opportunities': 'ជួយ SME បង្ហាញឱកាសរៃអង្គាសមូលនិធិ',
    'Give investors a path to review potential SME deals': 'ផ្តល់ផ្លូវឲ្យវិនិយោគិនពិនិត្យកិច្ចព្រមព្រៀង SME ដែលអាចទៅរួច',
    'Create a clearer marketplace entry for advisory-led capital matching': 'បង្កើតច្រកចូលទីផ្សារដែលច្បាស់ជាងមុនសម្រាប់ការផ្គូផ្គងដើមទុនដឹកនាំដោយការប្រឹក្សា',
    'Typical marketplace use': 'ការប្រើប្រាស់ទីផ្សារជាទូទៅ',
    'Use BIA when an SME needs a clearer public path to fundraising conversations or when an investor wants to review potential SME opportunities in one place.':
      'ប្រើ BIA នៅពេល SME ត្រូវការផ្លូវសាធារណៈដែលច្បាស់ជាងមុនសម្រាប់ការពិភាក្សាអំពីការរៃអង្គាសមូលនិធិ ឬនៅពេលវិនិយោគិនចង់ពិនិត្យឱកាស SME ដែលមានសក្តានុពលនៅកន្លែងតែមួយ។',
    'Pair BIA with Biz Platform when a company needs both investor access and broader business operating support behind the fundraising process.':
      'ផ្គូផ្គង BIA ជាមួយវេទិកា Biz នៅពេលក្រុមហ៊ុនត្រូវការទាំងការចូលដល់វិនិយោគិន និងការគាំទ្រប្រតិបត្តិការអាជីវកម្មកាន់តែទូលំទូលាយនៅពីក្រោយដំណើរការរៃអង្គាសមូលនិធិ។',
    'SMEs preparing to raise capital, advisory teams, and investors looking for curated SME opportunities.':
      'SME ដែលកំពុងត្រៀមរៃអង្គាសដើមទុន ក្រុមប្រឹក្សា និងវិនិយោគិនដែលកំពុងស្វែងរកឱកាស SME ដែលបានជ្រើសរើស។',
    'Create a clearer matchmaking path between capital-seeking SMEs and interested investors.':
      'បង្កើតផ្លូវផ្គូផ្គងដែលច្បាស់ជាងមុនរវាង SME ដែលកំពុងស្វែងរកដើមទុន និងវិនិយោគិនដែលចាប់អារម្មណ៍។',
    'Best for: SME fundraising, investor discovery, advisory marketplace': 'សមស្របសម្រាប់៖ ការរៃអង្គាសមូលនិធិ SME ការស្វែងរកវិនិយោគិន និងទីផ្សារប្រឹក្សា',
    'Visit BIA Marketplace': 'ចូលទៅទីផ្សារ BIA',
    'Operating Footprint': 'ស្នាមជើងប្រតិបត្តិការ',
    'Current public footprint investors can verify today.': 'ស្ថានភាពសាធារណៈបច្ចុប្បន្នដែលវិនិយោគិនអាចផ្ទៀងផ្ទាត់បានថ្ងៃនេះ។',
    '8 public platform endpoints': 'ចំណុចចូលវេទិកាសាធារណៈ ៨',
    '9 public platform endpoints': 'ចំណុចចូលវេទិកាសាធារណៈ ៩',
    '10 public platform endpoints': 'ចំណុចចូលវេទិកាសាធារណៈ ១០',
    '4 operating pillars': 'សសរស្តម្ភប្រតិបត្តិការ ៤',
    'Messenger Hub, Student Portal, Teacher Portal, Banking Skills Academy, Micro-SME Platform, Micro-Lending Platform, Pair Me Up, and PayKH are all publicly represented.':
      'Messenger Hub, Student Portal, Teacher Portal, Banking Skills Academy, វេទិកា Micro-SME, វេទិកា Micro-Lending, Pair Me Up និង PayKH ត្រូវបានតំណាងជាសាធារណៈរួចហើយ។',
    'Messenger Hub, Student Portal, Teacher Portal, Banking Skills Academy, Micro-SME Platform, Micro-Lending Platform, Pair Me Up, PayKH, and Biz Platform are all publicly represented.':
      'Messenger Hub, Student Portal, Teacher Portal, Banking Skills Academy, វេទិកា Micro-SME, វេទិកា Micro-Lending, Pair Me Up, PayKH និងវេទិកា Biz ត្រូវបានតំណាងជាសាធារណៈរួចហើយ។',
    'Messenger Hub, Student Portal, Teacher Portal, Banking Skills Academy, Micro-SME Platform, Micro-Lending Platform, Pair Me Up, PayKH, Biz Platform, and BIA Marketplace are all publicly represented.':
      'Messenger Hub, Student Portal, Teacher Portal, Banking Skills Academy, វេទិកា Micro-SME, វេទិកា Micro-Lending, Pair Me Up, PayKH, វេទិកា Biz និងទីផ្សារ BIA ត្រូវបានតំណាងជាសាធារណៈរួចហើយ។',
    'The portfolio is organized around business communication, education, business operations, fundraising access, lending, and payment adjacency.':
      'ក្រុមផលិតផលត្រូវបានរៀបចំជុំវិញការទំនាក់ទំនងអាជីវកម្ម ការអប់រំ ប្រតិបត្តិការអាជីវកម្ម ការចូលដល់ការរៃអង្គាសមូលនិធិ ឥណទាន និងការទូទាត់ដែលភ្ជាប់គ្នា។',
    'These are public, visible signals of operating momentum. Detailed commercial metrics can be shared through a private investor brief.':
      'ទាំងនេះជាសញ្ញាសាធារណៈដែលអាចមើលឃើញពីសន្ទុះប្រតិបត្តិការ។ ទិន្នន័យពាណិជ្ជកម្មលម្អិតអាចចែករំលែកតាមរយៈសង្ខេបវិនិយោគឯកជន។',
    'Core public products': 'ផលិតផលសាធារណៈស្នូល',
    'Messenger Hub, AI Learning Center, Micro-SME Platform, Micro-Lending Platform, and Pair Me Up are already presented through a public website with supporting student and teacher portals.':
      'Messenger Hub, AI Learning Center, វេទិកា Micro-SME, វេទិកា Micro-Lending និង Pair Me Up ត្រូវបានបង្ហាញរួចហើយតាមរយៈគេហទំព័រសាធារណៈ ជាមួយវេទិកាគាំទ្រសិស្ស និងគ្រូ។',
    'Messenger Hub, AI Learning Center, Micro-SME Platform, PayKH, Micro-Lending Platform, and Pair Me Up are already presented through a public website with supporting student and teacher portals.':
      'Messenger Hub, AI Learning Center, វេទិកា Micro-SME, PayKH, វេទិកា Micro-Lending និង Pair Me Up ត្រូវបានបង្ហាញរួចហើយតាមរយៈគេហទំព័រសាធារណៈ ជាមួយវេទិកាគាំទ្រសិស្ស និងគ្រូ។',
    'Messenger Hub, AI Learning Center, Micro-SME Platform, PayKH, Biz Platform, Micro-Lending Platform, and Pair Me Up are already presented through a public website with supporting student and teacher portals.':
      'Messenger Hub, AI Learning Center, វេទិកា Micro-SME, PayKH, វេទិកា Biz, វេទិកា Micro-Lending និង Pair Me Up ត្រូវបានបង្ហាញរួចហើយតាមរយៈគេហទំព័រសាធារណៈ ជាមួយវេទិកាគាំទ្រសិស្ស និងគ្រូ។',
    'This gives investors a visible product surface they can review today, rather than a concept-stage narrative without operating proof.':
      'នេះផ្តល់ឲ្យវិនិយោគិននូវផ្ទៃផលិតផលដែលអាចមើលឃើញ និងពិនិត្យបានភ្លាមៗ ជំនួសឲ្យការរៀបរាប់គំនិតដែលមិនទាន់មានភស្តុតាងប្រតិបត្តិការ។',
    'This gives investors a visible product surface they can review today, including commerce, payments, learning, and operational finance rather than a concept-stage narrative without operating proof.':
      'នេះផ្តល់ឲ្យវិនិយោគិននូវផ្ទៃផលិតផលដែលអាចមើលឃើញ និងពិនិត្យបានភ្លាមៗ រួមទាំងពាណិជ្ជកម្ម ការទូទាត់ ការសិក្សា និងហិរញ្ញវត្ថុប្រតិបត្តិការ ជំនួសឲ្យការរៀបរាប់គំនិតដែលមិនទាន់មានភស្តុតាងប្រតិបត្តិការ។',
    'Primary market wedges': 'ច្រកចូលទីផ្សារសំខាន់',
    'The strongest commercial entry points are customer communication, SME operations, lending records, and structured learning workflows for schools and banking-related training.':
      'ច្រកចូលពាណិជ្ជកម្មដែលខ្លាំងបំផុតគឺការទំនាក់ទំនងអតិថិជន ប្រតិបត្តិការ SME កំណត់ត្រាឥណទាន និងលំហូរការសិក្សាដែលមានរចនាសម្ព័ន្ធសម្រាប់សាលារៀន និងការបណ្តុះបណ្តាលពាក់ព័ន្ធនឹងធនាគារ។',
    'The strongest commercial entry points are customer communication, SME operations, merchant payments, lending records, and structured learning workflows for schools and banking-related training.':
      'ច្រកចូលពាណិជ្ជកម្មដែលខ្លាំងបំផុតគឺការទំនាក់ទំនងអតិថិជន ប្រតិបត្តិការ SME ការទូទាត់របស់អាជីវករ កំណត់ត្រាឥណទាន និងលំហូរការសិក្សាដែលមានរចនាសម្ព័ន្ធសម្រាប់សាលារៀន និងការបណ្តុះបណ្តាលពាក់ព័ន្ធនឹងធនាគារ។',
    'These are practical wedges because they map to repeatable daily processes where software can improve speed, consistency, visibility, and operating discipline.':
      'ទាំងនេះជាច្រកចូលជាក់ស្តែង ព្រោះវាភ្ជាប់ទៅនឹងដំណើរការប្រចាំថ្ងៃដែលកើតឡើងម្តងហើយម្តងទៀត ដែលសូហ្វវែរអាចបង្កើនល្បឿន ស្ថិរភាព ភាពមើលឃើញ និងវិន័យប្រតិបត្តិការ។',
    'These are practical wedges because they map to repeatable daily processes where software can improve speed, consistency, payment confidence, visibility, and operating discipline.':
      'ទាំងនេះជាច្រកចូលជាក់ស្តែង ព្រោះវាភ្ជាប់ទៅនឹងដំណើរការប្រចាំថ្ងៃដែលកើតឡើងម្តងហើយម្តងទៀត ដែលសូហ្វវែរអាចបង្កើនល្បឿន ស្ថិរភាព ទំនុកចិត្តលើការទូទាត់ ភាពមើលឃើញ និងវិន័យប្រតិបត្តិការ។',
    'Next investor step': 'ជំហានបន្ទាប់សម្រាប់វិនិយោគិន',
    'Request the private investor brief for traction, pipeline, partnership progress, founder discussion, and financial detail that is not published on the public site.':
      'ស្នើសុំសង្ខេបវិនិយោគឯកជន សម្រាប់ទិន្នន័យ traction បំពង់លក់ វឌ្ឍនភាពដៃគូ ការពិភាក្សាជាមួយស្ថាបនិក និងព័ត៌មានហិរញ្ញវត្ថុដែលមិនបានបោះពុម្ពលើគេហទំព័រសាធារណៈ។',
    'The public layer is designed to establish clarity and trust first, then support a deeper investor conversation with private operating material.':
      'ស្រទាប់សាធារណៈត្រូវបានរចនាឡើងដើម្បីបង្កើតភាពច្បាស់លាស់ និងទំនុកចិត្តជាមុន បន្ទាប់មកគាំទ្រការពិភាក្សាជ្រាលជ្រៅជាមួយវិនិយោគិន ដោយប្រើសម្ភារៈប្រតិបត្តិការឯកជន។',
    'The core thesis is not to build generic tools, but to solve visible operational routines where adoption value can be understood quickly by business users, teachers, learners, and operators.':
      'គន្លឹះសំខាន់មិនមែនបង្កើតឧបករណ៍ទូទៅទេ ប៉ុន្តែជាការដោះស្រាយលំហូរប្រតិបត្តិការដែលមើលឃើញច្បាស់ ដែលតម្លៃនៃការប្រើប្រាស់អាចយល់បានយ៉ាងឆាប់រហ័សដោយអ្នកប្រើអាជីវកម្ម គ្រូ អ្នកសិក្សា និងអ្នកប្រតិបត្តិការ។',
    'This sequencing gives the company a clearer commercialization path: lead with communication and revenue-adjacent tools, then deepen value through workflow software and recurring learning products.':
      'លំដាប់នេះផ្តល់ឲ្យក្រុមហ៊ុននូវផ្លូវពាណិជ្ជកម្មកាន់តែច្បាស់៖ ចាប់ផ្តើមពីឧបករណ៍ទំនាក់ទំនង និងឧបករណ៍ដែលជាប់ទាក់ទងនឹងចំណូល បន្ទាប់មកបន្ថែមតម្លៃតាមរយៈសូហ្វវែរលំហូរការងារ និងផលិតផលសិក្សាដែលប្រើជាបន្តបន្ទាប់។',
    'These categories remain attractive because buyers already recognize the workflow pain, yet many organizations still operate with fragmented tools, manual coordination, and limited visibility.':
      'ប្រភេទទាំងនេះនៅតែមានភាពទាក់ទាញ ព្រោះអ្នកទិញបានយល់រួចហើយអំពីបញ្ហាលំហូរការងារ ប៉ុន្តែអង្គការជាច្រើននៅតែប្រើឧបករណ៍បែកបាក់ ការសម្របសម្រួលដោយដៃ និងភាពមើលឃើញមានកម្រិត។',
    'How It Fits Together': 'របៀបដែលវាចូលគ្នា',
    'See CamboBIA as a simple business flow.': 'មើល CamboBIA ជាលំហូរអាជីវកម្មសាមញ្ញមួយ។',
    'Reach people, train them, and run operations with the right product group.':
      'ឈានដល់មនុស្ស បណ្តុះបណ្តាលពួកគេ និងដំណើរការប្រតិបត្តិការជាមួយក្រុមផលិតផលត្រឹមត្រូវ។',
    Reach: 'ឈានដល់',
    'Talk to the right audience': 'និយាយជាមួយក្រុមគោលដៅត្រឹមត្រូវ',
    'Use Messenger Hub and the Micro-SME Platform to create stronger customer touchpoints through messaging.':
      'ប្រើ Messenger Hub និងវេទិកា Micro-SME ដើម្បីបង្កើតចំណុចប៉ះពាល់អតិថិជនកាន់តែខ្លាំងតាមរយៈការផ្ញើសារ។',
    'Use Messenger Hub and the Micro-SME Platform to create stronger customer touchpoints through messaging, then bring PayKH into the flow when payment needs to happen cleanly.':
      'ប្រើ Messenger Hub និងវេទិកា Micro-SME ដើម្បីបង្កើតចំណុចប៉ះពាល់អតិថិជនកាន់តែខ្លាំងតាមរយៈការផ្ញើសារ បន្ទាប់មកនាំ PayKH ចូលក្នុងលំហូរ នៅពេលការទូទាត់ត្រូវការការប្រព្រឹត្តទៅយ៉ាងស្អាត។',
    Learn: 'រៀន',
    'Train and prepare people': 'បណ្តុះបណ្តាល និងរៀបចំមនុស្ស',
    'Use the student portal, admin portal, Banking Skills Academy, and Pair Me Up to improve learning outcomes and focus.':
      'ប្រើវេទិកាសិស្ស វេទិកាគ្រប់គ្រង Banking Skills Academy និង Pair Me Up ដើម្បីបង្កើនលទ្ធផលសិក្សា និងការផ្តោតអារម្មណ៍។',
    Operate: 'ដំណើរការ',
    'Run cleaner daily operations': 'ដំណើរការប្រចាំថ្ងៃឲ្យមានរបៀបជាងមុន',
    'Use the Micro-SME Platform and Micro-Lending Platform to manage sales, stock, records, and lending activity.':
      'ប្រើវេទិកា Micro-SME និង Micro-Lending ដើម្បីគ្រប់គ្រងការលក់ ស្តុក កំណត់ត្រា និងសកម្មភាពឥណទាន។',
    'Use the Micro-SME Platform, PayKH, and Micro-Lending Platform to manage sales, checkout, stock, records, and lending activity.':
      'ប្រើវេទិកា Micro-SME, PayKH និងវេទិកា Micro-Lending ដើម្បីគ្រប់គ្រងការលក់ ការទូទាត់ចុងក្រោយ ស្តុក កំណត់ត្រា និងសកម្មភាពឥណទាន។',
    'Team And Structure': 'ក្រុម និងរចនាសម្ព័ន្ធ',
    'What Makes It Useful': 'អ្វីដែលធ្វើឲ្យវាមានប្រយោជន៍',
    'How Customers Start': 'របៀបដែលអតិថិជនចាប់ផ្តើម'
  }
};

const pageTitleTranslations = {
  '/': {
    en: 'CamboBIA | Digital Products for Growth, Learning, and Operations',
    km: 'CamboBIA | ផលិតផលឌីជីថលសម្រាប់ការលូតលាស់ ការសិក្សា និងប្រតិបត្តិការ'
  },
  '/index.html': {
    en: 'CamboBIA | Digital Products for Growth, Learning, and Operations',
    km: 'CamboBIA | ផលិតផលឌីជីថលសម្រាប់ការលូតលាស់ ការសិក្សា និងប្រតិបត្តិការ'
  },
  '/biz-platform': {
    en: 'Biz Platform | CamboBIA',
    km: 'វេទិកា Biz | CamboBIA'
  },
  '/bia-marketplace': {
    en: 'BIA Marketplace | CamboBIA',
    km: 'ទីផ្សារ BIA | CamboBIA'
  }
};

const metaDescriptionTranslations = {
  '/': {
    en: 'CamboBIA, short for Cambodia Boutique Investment Advisory, builds practical digital products for messaging, education, SME commerce, micro lending, and focus-based learning games.',
    km: 'CamboBIA ដែលមានន័យថា Cambodia Boutique Investment Advisory បង្កើតផលិតផលឌីជីថលជាក់ស្តែងសម្រាប់ការផ្ញើសារ ការអប់រំ ពាណិជ្ជកម្ម SME ឥណទានខ្នាតតូច និងហ្គេមហ្វឹកហាត់ការផ្តោតអារម្មណ៍។'
  },
  '/index.html': {
    en: 'CamboBIA, short for Cambodia Boutique Investment Advisory, builds practical digital products for messaging, education, SME commerce, micro lending, and focus-based learning games.',
    km: 'CamboBIA ដែលមានន័យថា Cambodia Boutique Investment Advisory បង្កើតផលិតផលឌីជីថលជាក់ស្តែងសម្រាប់ការផ្ញើសារ ការអប់រំ ពាណិជ្ជកម្ម SME ឥណទានខ្នាតតូច និងហ្គេមហ្វឹកហាត់ការផ្តោតអារម្មណ៍។'
  },
  '/biz-platform': {
    en: 'Biz Platform by CamboBIA presents a broader business workspace path for teams that need a practical operating layer around day-to-day business activity.',
    km: 'វេទិកា Biz របស់ CamboBIA បង្ហាញផ្លូវមួយសម្រាប់កន្លែងការងារអាជីវកម្មទូលំទូលាយ សម្រាប់ក្រុមដែលត្រូវការស្រទាប់ប្រតិបត្តិការជាក់ស្តែងជុំវិញសកម្មភាពអាជីវកម្មប្រចាំថ្ងៃ។'
  },
  '/bia-marketplace': {
    en: 'BIA Marketplace by CamboBIA is an advisory marketplace for SMEs raising funds and investors looking to review potential SME opportunities.',
    km: 'ទីផ្សារ BIA របស់ CamboBIA គឺជាទីផ្សារប្រឹក្សាសម្រាប់ SME ដែលកំពុងរៃអង្គាសមូលនិធិ និងវិនិយោគិនដែលចង់ពិនិត្យឱកាស SME ដែលមានសក្តានុពល។'
  }
};

const titleMap = pageTitleTranslations[window.location.pathname] || null;
const descriptionMap = metaDescriptionTranslations[window.location.pathname] || null;
const metaDescription = document.querySelector('meta[name="description"]');
const originalMetaDescription = metaDescription ? metaDescription.getAttribute('content') : null;
const originalTitle = document.title;

const inverseTranslations = Object.fromEntries(
  Object.entries(phraseTranslations.km).map(([en, km]) => [km, en])
);

let syncSiteAssistant = () => {};

const textNodes = [];

const collectTextNodes = () => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) {
        return NodeFilter.FILTER_REJECT;
      }

      const parentName = node.parentElement?.tagName;

      if (!parentName || ['SCRIPT', 'STYLE'].includes(parentName)) {
        return NodeFilter.FILTER_REJECT;
      }

      return NodeFilter.FILTER_ACCEPT;
    }
  });

  let node = walker.nextNode();

  while (node) {
    textNodes.push({ node, original: node.nodeValue });
    node = walker.nextNode();
  }
};

collectTextNodes();

const preserveWhitespace = (original, replacement) => {
  const match = original.match(/^(\s*)(.*?)(\s*)$/s);

  if (!match) {
    return replacement;
  }

  return `${match[1]}${replacement}${match[3]}`;
};

const translateTextNodes = (lang) => {
  const dictionary = lang === 'km' ? phraseTranslations.km : inverseTranslations;

  textNodes.forEach(({ node, original }) => {
    const trimmed = original.trim();
    const replacement = dictionary[trimmed];
    node.nodeValue = replacement ? preserveWhitespace(original, replacement) : original;
  });
};

const ensureLanguageSwitcher = () => {
  if (document.querySelector('.lang-switcher')) {
    return;
  }

  const switcher = document.createElement('div');
  switcher.className = 'lang-switcher';
  switcher.setAttribute('aria-label', 'Language switcher');
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'km', label: 'ខ្មែរ' }
  ];

  languages.forEach(({ code, label }) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'lang-button';
    button.dataset.langButton = code;
    button.textContent = label;
    switcher.appendChild(button);
  });

  const topbar = document.querySelector('.topbar');
  const legalHeader = document.querySelector('.legal-header');

  if (topbar) {
    topbar.appendChild(switcher);
  } else if (legalHeader) {
    legalHeader.appendChild(switcher);
  }
};

const updateLanguageButtons = (lang) => {
  document.querySelectorAll('[data-lang-button]').forEach((button) => {
    const isActive = button.dataset.langButton === lang;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
};

const applyLanguage = (lang) => {
  const resolvedLang = lang === 'km' ? 'km' : 'en';
  localStorage.setItem(LANGUAGE_STORAGE_KEY, resolvedLang);
  document.documentElement.lang = resolvedLang;
  translateTextNodes(resolvedLang);
  updateLanguageButtons(resolvedLang);

  if (resolvedLang === 'km') {
    document.body.classList.add('is-khmer');
  } else {
    document.body.classList.remove('is-khmer');
  }

  if (titleMap) {
    document.title = titleMap[resolvedLang];
  } else {
    document.title = originalTitle;
  }

  if (metaDescription) {
    if (descriptionMap) {
      metaDescription.setAttribute('content', descriptionMap[resolvedLang]);
    } else {
      metaDescription.setAttribute('content', originalMetaDescription || '');
    }
  }

  syncSiteAssistant(resolvedLang);
};

ensureLanguageSwitcher();

document.querySelectorAll('[data-lang-button]').forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.langButton));
});

applyLanguage(localStorage.getItem(LANGUAGE_STORAGE_KEY) || DEFAULT_LANGUAGE);

const revealNodes = document.querySelectorAll('.reveal');

const showNode = (node) => node.classList.add('visible');

const supportsObserver = 'IntersectionObserver' in window;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!supportsObserver || prefersReducedMotion) {
  revealNodes.forEach(showNode);
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          showNode(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealNodes.forEach((node) => observer.observe(node));
}

const explorerTabs = document.querySelectorAll('[data-profile]');
const explorerViews = document.querySelectorAll('[data-profile-view]');

if (explorerTabs.length && explorerViews.length) {
  const activateProfile = (profile) => {
    explorerTabs.forEach((tab) => {
      const isActive = tab.dataset.profile === profile;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
    });

    explorerViews.forEach((view) => {
      view.classList.toggle('is-active', view.dataset.profileView === profile);
    });
  };

  explorerTabs.forEach((tab) => {
    tab.addEventListener('click', () => activateProfile(tab.dataset.profile));
  });
}

const siteAssistantCopy = {
  en: {
    toggleLabel: 'Open site assistant',
    heading: 'CamboBIA Assistant',
    statusFallback: 'Ask about products, pairings, contact, or what fits your needs.',
    statusLive: 'Chat with CamboBIA support about your business, school, payment, or operations needs.',
    intro:
      'Hello. I can help you understand which CamboBIA platform fits your situation and what the best next step should be.',
    inputPlaceholder: 'Ask about Messenger Hub, CXDot, PayKH, learning, or contact...',
    send: 'Send',
    thinking: 'Thinking...',
    fallbackNotice: 'The live AI assistant is unavailable right now, but I can still guide you like a service advisor using the site knowledge.',
    fallback:
      'I can help with messaging, education, SME commerce, lending, payments, or direct contact. Tell me a little about your business or the problem you want to solve, and I will point you in the right direction.',
    greeting:
      'Hello. Tell me what you are trying to improve, and I will help you find the best CamboBIA platform or combination for it.',
    thanks:
      'You’re welcome. If helpful, I can also suggest the best platform combination or prepare the direct contact path for you.',
    contact:
      'The best direct contact is contact@cambobia.com. You can use it for demos, partnership discussion, investor questions, or business inquiries, and I can also help you decide what to mention before you email.',
    business:
      'If your priority is customer outreach, start with Messenger Hub. If you also need conversational selling, stock, POS, or AI customer interaction, CXDot is the next fit, and PayKH comes in when payment completion matters.',
    learning:
      'For education, the best path is usually the AI Learning Center family: mytv for students, admintv for teachers and admin teams, skill for banking training, and Pair Me Up when learners need extra focus support.',
    payments:
      'PayKH is the payment platform for merchant checkout, transaction support, and KHQR-ready collection flow. It fits especially well when your business already has customer demand and now needs a cleaner payment step.',
    lending:
      'DBank is the micro-lending platform for borrower profiles, loan tracking, repayments, and cleaner lending records. It is a strong fit for micro lenders or hybrid operators who need more structure around lending books.',
    products:
      'CamboBIA currently presents Messenger Hub, AI Learning Center, Student Portal, Teacher Portal, Banking Skills Academy, CXDot, DBank, Pair Me Up, PayKH, Biz Platform, and BIA Marketplace. If you tell me what kind of organization you are, I can narrow that down quickly.',
    moreBusiness:
      'A simple business path is Messenger Hub for outreach, CXDot for AI-led product conversation and order flow, then PayKH for payment completion. That is usually the clearest public-facing combination.',
    moreLearning:
      'A simple learning path is mytv for student study, admintv for oversight and question management, skill for banking-related training, and Pair Me Up when learners benefit from extra focus support.',
    morePayments:
      'PayKH is strongest when payment is not treated as a separate manual step. It works best when checkout is tied back to the customer journey created through Messenger Hub or CXDot.',
    moreLending:
      'DBank becomes more useful as borrower records, repayments, and portfolio visibility grow. If the same operator also handles commerce, CXDot and PayKH can sit around it.',
    businessQuestion: 'Is your main goal customer outreach, conversational selling, or payment collection?',
    learningQuestion: 'Is your focus mainly students, teachers, or banking training?',
    paymentsQuestion: 'Do you need merchant checkout only, or do you also want sales conversations to lead into payment?',
    lendingQuestion: 'Is this for a pure lending workflow, or for a business that also sells products or services?',
    contactQuestion: 'Would you like me to prepare the direct contact path, or help you choose the right product first?',
    generalQuestion: 'Tell me what kind of organization you are and what problem you want to solve.',
    contactCta: 'Prepare contact email',
    fitCta: 'Best-fit page'
  },
  km: {
    toggleLabel: 'បើកជំនួយការគេហទំព័រ',
    heading: 'ជំនួយការ CamboBIA',
    statusFallback: 'សួរអំពីផលិតផល ការផ្គូផ្គង ទំនាក់ទំនង ឬអ្វីដែលសមនឹងតម្រូវការ។',
    statusLive: 'ជជែកជាមួយក្រុមគាំទ្រ CamboBIA អំពីតម្រូវការអាជីវកម្ម សាលារៀន ការទូទាត់ ឬប្រតិបត្តិការ។',
    intro:
      'សួស្តី។ ខ្ញុំអាចជួយអ្នកយល់ថាវេទិកា CamboBIA មួយណាសមនឹងស្ថានភាពរបស់អ្នក និងជំហានបន្ទាប់គួរធ្វើអ្វី។',
    inputPlaceholder: 'សួរអំពី Messenger Hub, CXDot, PayKH, ការសិក្សា ឬទំនាក់ទំនង...',
    send: 'ផ្ញើ',
    thinking: 'កំពុងគិត...',
    fallbackNotice: 'ជំនួយការ AI មិនអាចប្រើបានបណ្តោះអាសន្នទេ ប៉ុន្តែខ្ញុំនៅតែអាចណែនាំអ្នកដូចជាអ្នកប្រឹក្សាសេវាអតិថិជនម្នាក់បាន។',
    fallback:
      'ខ្ញុំអាចជួយអំពីការផ្ញើសារ ការអប់រំ ពាណិជ្ជកម្ម SME ឥណទាន ការទូទាត់ ឬទំនាក់ទំនងដោយផ្ទាល់។ សូមប្រាប់ខ្ញុំបន្តិចអំពីអាជីវកម្ម ឬបញ្ហាដែលអ្នកចង់ដោះស្រាយ ហើយខ្ញុំនឹងណែនាំផ្លូវដែលសមស្រប។',
    greeting:
      'សួស្តី។ សូមប្រាប់ខ្ញុំថាអ្នកចង់កែលម្អអ្វី ហើយខ្ញុំនឹងជួយរកវេទិកា CamboBIA ឬការផ្គូផ្គងដែលសមស្របបំផុត។',
    thanks:
      'មិនអីទេ។ បើចង់បាន ខ្ញុំក៏អាចណែនាំការផ្គូផ្គងវេទិកាដែលសមស្របបំផុត ឬរៀបចំផ្លូវទំនាក់ទំនងដោយផ្ទាល់ឲ្យអ្នកបានផងដែរ។',
    contact:
      'ការទំនាក់ទំនងដោយផ្ទាល់ល្អបំផុតគឺ contact@cambobia.com។ អ្នកអាចប្រើវាសម្រាប់ demo ភាពជាដៃគូ សំណួរពីវិនិយោគិន ឬសំណួរអាជីវកម្ម ហើយខ្ញុំក៏អាចជួយអ្នកសម្រេចថាគួរនិយាយអ្វីមុនផ្ញើអ៊ីមែលផងដែរ។',
    business:
      'បើអាទិភាពរបស់អ្នកគឺការឈានដល់អតិថិជន សូមចាប់ផ្តើមពី Messenger Hub។ បើត្រូវការការលក់តាមការសន្ទនា ស្តុក POS ឬការទំនាក់ទំនងអតិថិជនដោយ AI នោះ CXDot គឺសមបន្ទាប់ ហើយ PayKH ចូលមកនៅពេលការបញ្ចប់ការទូទាត់មានសារៈសំខាន់។',
    learning:
      'សម្រាប់ការអប់រំ ផ្លូវដែលសមបំផុតជាទូទៅគឺគ្រួសារ AI Learning Center: mytv សម្រាប់សិស្ស admintv សម្រាប់គ្រូ និងក្រុមគ្រប់គ្រង skill សម្រាប់ការបណ្តុះបណ្តាលធនាគារ និង Pair Me Up នៅពេលអ្នកសិក្សាត្រូវការការគាំទ្រការផ្តោតអារម្មណ៍បន្ថែម។',
    payments:
      'PayKH គឺជាវេទិកាទូទាត់សម្រាប់ការទូទាត់របស់អាជីវករ ការគាំទ្រប្រតិបត្តិការ និងលំហូរប្រមូលប្រាក់ KHQR-ready។ វាសមជាពិសេសនៅពេលអាជីវកម្មមានតម្រូវការអតិថិជនរួចហើយ ហើយត្រូវការជំហានទូទាត់ដែលស្អាតជាងមុន។',
    lending:
      'DBank គឺជាវេទិកា micro-lending សម្រាប់ប្រវត្តិអ្នកខ្ចី ការតាមដានប្រាក់កម្ចី ការសងប្រាក់ និងកំណត់ត្រាឥណទានដែលមានរបៀបរៀបរយជាងមុន។ វាសមល្អសម្រាប់អ្នកឥណទានខ្នាតតូច ឬប្រតិបត្តិករចម្រុះដែលត្រូវការរចនាសម្ព័ន្ធកាន់តែច្បាស់ជុំវិញសៀវភៅឥណទាន។',
    products:
      'បច្ចុប្បន្ន CamboBIA បង្ហាញ Messenger Hub, AI Learning Center, Student Portal, Teacher Portal, Banking Skills Academy, CXDot, DBank, Pair Me Up, PayKH, វេទិកា Biz និងទីផ្សារ BIA។ ខ្ញុំអាចជួយបង្រួមជម្រើសនេះ បើអ្នកប្រាប់ប្រភេទអង្គការរបស់អ្នក។',
    moreBusiness:
      'ផ្លូវអាជីវកម្មសាមញ្ញមួយគឺ៖ Messenger Hub សម្រាប់ការផ្សព្វផ្សាយ CXDot សម្រាប់ការសន្ទនាផលិតផល និងលំហូរការបញ្ជាទិញដោយជំនួយ AI ហើយបន្ទាប់មក PayKH សម្រាប់ការបញ្ចប់ការទូទាត់។ នេះជាការផ្គូផ្គងសាធារណៈដែលច្បាស់ជាងគេ។',
    moreLearning:
      'ផ្លូវសិក្សាសាមញ្ញមួយគឺ៖ mytv សម្រាប់ការសិក្សារបស់សិស្ស admintv សម្រាប់ការត្រួតពិនិត្យ និងការគ្រប់គ្រងសំណួរ skill សម្រាប់ការបណ្តុះបណ្តាលពាក់ព័ន្ធនឹងធនាគារ និង Pair Me Up នៅពេលអ្នកសិក្សាត្រូវការការគាំទ្រការផ្តោតអារម្មណ៍បន្ថែម។',
    morePayments:
      'PayKH ខ្លាំងបំផុតនៅពេលការទូទាត់មិនត្រូវបានទុកជាជំហានដាច់ដោយឡែកដែលធ្វើដោយដៃ។ វាធ្វើការល្អបំផុតនៅពេល checkout ត្រូវបានភ្ជាប់ត្រឡប់ទៅដំណើរអតិថិជនដែលបង្កើតដោយ Messenger Hub ឬ CXDot។',
    moreLending:
      'DBank កាន់តែមានប្រយោជន៍នៅពេលកំណត់ត្រាអ្នកខ្ចី ការសងប្រាក់ និងភាពមើលឃើញនៃសៀវភៅឥណទានកើនឡើង។ បើប្រតិបត្តិករដូចគ្នាក៏គ្រប់គ្រងពាណិជ្ជកម្មដែរ CXDot និង PayKH អាចស្ថិតនៅជុំវិញវាបាន។',
    businessQuestion: 'តើគោលដៅសំខាន់របស់អ្នកគឺការផ្សព្វផ្សាយ ការលក់តាមការសន្ទនា ឬការប្រមូលការទូទាត់?',
    learningQuestion: 'តើការផ្តោតសំខាន់របស់អ្នកគឺសិស្ស គ្រូ ឬការបណ្តុះបណ្តាលធនាគារ?',
    paymentsQuestion: 'តើអ្នកត្រូវការការទូទាត់សម្រាប់អាជីវករប៉ុណ្ណោះ ឬចង់ឲ្យការសន្ទនាលក់នាំទៅរកការទូទាត់ផងដែរ?',
    lendingQuestion: 'តើនេះសម្រាប់លំហូរឥណទានសុទ្ធៗ ឬសម្រាប់អាជីវកម្មដែលក៏លក់ផលិតផល ឬសេវាកម្មផងដែរ?',
    contactQuestion: 'តើអ្នកចង់ឲ្យខ្ញុំរៀបចំផ្លូវទំនាក់ទំនងដោយផ្ទាល់ ឬជួយអ្នកជ្រើសផលិតផលដែលត្រឹមត្រូវជាមុន?',
    generalQuestion: 'សូមប្រាប់ខ្ញុំថាអ្នកជាអង្គការប្រភេទណា និងបញ្ហាអ្វីដែលអ្នកចង់ដោះស្រាយ។',
    contactCta: 'រៀបចំអ៊ីមែលទំនាក់ទំនង',
    fitCta: 'ទំព័រដែលសមស្របបំផុត'
  }
};

const siteAssistantProductActions = {
  messenger_hub: {
    href: '/messenger-hub',
    en: 'Messenger Hub',
    km: 'Messenger Hub'
  },
  micro_sme_platform: {
    href: '/micro-sme-platform',
    en: 'Micro-SME Platform',
    km: 'វេទិកា Micro-SME'
  },
  paykh: {
    href: '/paykh',
    en: 'PayKH',
    km: 'PayKH'
  },
  biz_platform: {
    href: '/biz-platform',
    en: 'Biz Platform',
    km: 'វេទិកា Biz'
  },
  bia_marketplace: {
    href: '/bia-marketplace',
    en: 'BIA Marketplace',
    km: 'ទីផ្សារ BIA'
  },
  micro_lending_platform: {
    href: '/micro-lending-platform',
    en: 'Micro-Lending Platform',
    km: 'វេទិកា Micro-Lending'
  },
  ai_learning_center: {
    href: '/ai-learning-center',
    en: 'AI Learning Center',
    km: 'AI Learning Center'
  },
  student_portal: {
    href: '/student-portal',
    en: 'Student Portal',
    km: 'វេទិកាសិស្ស'
  },
  teacher_portal: {
    href: '/teacher-portal',
    en: 'Teacher Portal',
    km: 'វេទិកាគ្រូ'
  },
  banking_skills_academy: {
    href: '/banking-skills-academy',
    en: 'Banking Skills Academy',
    km: 'Banking Skills Academy'
  },
  pair_me_up: {
    href: '/pair-me-up',
    en: 'Pair Me Up',
    km: 'Pair Me Up'
  }
};

const createAssistantElement = (tag, className, text) => {
  const node = document.createElement(tag);

  if (className) {
    node.className = className;
  }

  if (typeof text === 'string') {
    node.textContent = text;
  }

  return node;
};

const mountSiteAssistant = () => {
  const assistant = createAssistantElement('section', 'site-assistant');
  assistant.setAttribute('aria-label', 'Site assistant');

  const toggle = createAssistantElement('button', 'site-assistant-toggle');
  toggle.type = 'button';
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'site-assistant-panel');

  const toggleDot = createAssistantElement('span', 'site-assistant-toggle-dot');
  const toggleText = createAssistantElement('span', 'site-assistant-toggle-text');
  toggle.append(toggleDot, toggleText);

  const panel = createAssistantElement('div', 'site-assistant-panel');
  panel.id = 'site-assistant-panel';
  panel.hidden = true;

  const header = createAssistantElement('div', 'site-assistant-header');
  const titleWrap = createAssistantElement('div', 'site-assistant-title-wrap');
  const title = createAssistantElement('strong', 'site-assistant-title');
  const status = createAssistantElement('p', 'site-assistant-status');
  titleWrap.append(title, status);
  const closeButton = createAssistantElement('button', 'site-assistant-close', '×');
  closeButton.type = 'button';
  closeButton.setAttribute('aria-label', 'Close site assistant');
  header.append(titleWrap, closeButton);

  const messages = createAssistantElement('div', 'site-assistant-messages');
  messages.setAttribute('role', 'log');
  messages.setAttribute('aria-live', 'polite');

  const form = createAssistantElement('form', 'site-assistant-form');
  const input = createAssistantElement('input', 'site-assistant-input');
  input.type = 'text';
  input.name = 'assistant_message';
  input.autocomplete = 'off';
  const sendButton = createAssistantElement('button', 'site-assistant-send');
  sendButton.type = 'submit';
  form.append(input, sendButton);

  panel.append(header, messages, form);
  assistant.append(toggle, panel);
  document.body.appendChild(assistant);

  const conversationState = {
    lastTopic: 'general',
    turnCount: 0,
    messages: [],
    aiEnabled: false,
    statusLoaded: false,
    isBusy: false,
    fallbackNoticeShown: false
  };

  const appendMessage = (type, text) => {
    const message = createAssistantElement('div', `site-assistant-message site-assistant-message-${type}`);
    const bubble = createAssistantElement('p', 'site-assistant-bubble', text);
    message.appendChild(bubble);
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
    return message;
  };

  const appendActionRow = (actions) => {
    if (!actions.length) {
      return;
    }

    const row = createAssistantElement('div', 'site-assistant-message site-assistant-message-bot');
    const actionWrap = createAssistantElement('div', 'site-assistant-action-row');

    actions.forEach((action) => {
      const link = createAssistantElement('a', 'site-assistant-link', action.label);
      link.href = action.href;

      if (action.href.startsWith('mailto:')) {
        link.target = '_self';
      } else if (action.href.startsWith('http')) {
        link.target = '_blank';
        link.rel = 'noreferrer';
      } else {
        link.target = '_self';
      }

      actionWrap.appendChild(link);
    });

    row.appendChild(actionWrap);
    messages.appendChild(row);
    messages.scrollTop = messages.scrollHeight;
  };

  const detectTopic = (value) => {
    const normalized = value.trim().toLowerCase();

    if (!normalized) {
      return 'general';
    }

    if (
      ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'សួស្តី'].some((term) =>
        normalized.includes(term)
      )
    ) {
      return 'greeting';
    }

    if (
      ['thanks', 'thank you', 'appreciate', 'អរគុណ'].some((term) => normalized.includes(term))
    ) {
      return 'thanks';
    }

    if (
      normalized.includes('more') ||
      normalized.includes('tell me more') ||
      normalized.includes('what next') ||
      normalized.includes('next step') ||
      normalized.includes('បន្ថែម') ||
      normalized.includes('បន្ត')
    ) {
      return 'followup';
    }

    if (
      normalized.includes('contact') ||
      normalized.includes('email') ||
      normalized.includes('demo') ||
      normalized.includes('ទំនាក់ទំនង') ||
      normalized.includes('អ៊ីមែល')
    ) {
      return 'contact';
    }

    if (
      normalized.includes('payment') ||
      normalized.includes('paykh') ||
      normalized.includes('khqr') ||
      normalized.includes('ការទូទាត់')
    ) {
      return 'payments';
    }

    if (
      normalized.includes('learn') ||
      normalized.includes('student') ||
      normalized.includes('teacher') ||
      normalized.includes('school') ||
      normalized.includes('banking') ||
      normalized.includes('education') ||
      normalized.includes('ការសិក្សា') ||
      normalized.includes('សិស្ស') ||
      normalized.includes('គ្រូ')
    ) {
      return 'learning';
    }

    if (
      normalized.includes('lend') ||
      normalized.includes('loan') ||
      normalized.includes('dbank') ||
      normalized.includes('borrower') ||
      normalized.includes('ឥណទាន') ||
      normalized.includes('ប្រាក់កម្ចី')
    ) {
      return 'lending';
    }

    if (
      normalized.includes('business') ||
      normalized.includes('sale') ||
      normalized.includes('sme') ||
      normalized.includes('cxdot') ||
      normalized.includes('msghub') ||
      normalized.includes('messenger') ||
      normalized.includes('អាជីវកម្ម') ||
      normalized.includes('លក់')
    ) {
      return 'business';
    }

    if (
      normalized.includes('platform') ||
      normalized.includes('product') ||
      normalized.includes('what do you have') ||
      normalized.includes('ផលិតផល') ||
      normalized.includes('វេទិកា')
    ) {
      return 'products';
    }

    return 'general';
  };

  const buildResponse = (topic, copy) => {
    if (topic === 'followup') {
      if (conversationState.lastTopic === 'business') {
        return `${copy.moreBusiness} ${copy.businessQuestion}`;
      }

      if (conversationState.lastTopic === 'learning') {
        return `${copy.moreLearning} ${copy.learningQuestion}`;
      }

      if (conversationState.lastTopic === 'payments') {
        return `${copy.morePayments} ${copy.paymentsQuestion}`;
      }

      if (conversationState.lastTopic === 'lending') {
        return `${copy.moreLending} ${copy.lendingQuestion}`;
      }

      if (conversationState.lastTopic === 'contact') {
        return `${copy.contact} ${copy.contactQuestion}`;
      }

      return `${copy.products} ${copy.generalQuestion}`;
    }

    if (topic === 'greeting') {
      return copy.greeting;
    }

    if (topic === 'thanks') {
      return copy.thanks;
    }

    if (topic === 'contact') {
      return `${copy.contact} ${copy.contactQuestion}`;
    }

    if (topic === 'business') {
      return `${copy.business} ${copy.businessQuestion}`;
    }

    if (topic === 'learning') {
      return `${copy.learning} ${copy.learningQuestion}`;
    }

    if (topic === 'payments') {
      return `${copy.payments} ${copy.paymentsQuestion}`;
    }

    if (topic === 'lending') {
      return `${copy.lending} ${copy.lendingQuestion}`;
    }

    if (topic === 'products') {
      return `${copy.products} ${copy.generalQuestion}`;
    }

    return copy.fallback;
  };

  const buildFallbackActions = (topic, lang, copy, value) => {
    const productKeysByTopic = {
      business: ['messenger_hub', 'micro_sme_platform', 'paykh'],
      learning: ['ai_learning_center', 'student_portal', 'teacher_portal'],
      payments: ['paykh', 'micro_sme_platform'],
      lending: ['micro_lending_platform', 'micro_sme_platform'],
      products: ['messenger_hub', 'ai_learning_center', 'paykh'],
      contact: []
    };

    const productActions = (productKeysByTopic[topic] || [])
      .map((key) => siteAssistantProductActions[key])
      .filter(Boolean)
      .slice(0, 2)
      .map((item) => ({
        label: item[lang],
        href: item.href
      }));

    const mailBody = [
      lang === 'km' ? 'សួស្តី ក្រុមការងារ CamboBIA,' : 'Hello CamboBIA team,',
      '',
      lang === 'km'
        ? `ខ្ញុំចង់សាកសួរអំពី៖ ${value}`
        : `I would like to discuss: ${value}`,
      '',
      lang === 'km' ? 'សូមទាក់ទងមកខ្ញុំវិញ។' : 'Please contact me with the best next step.'
    ].join('\n');

    if (topic === 'contact' || topic === 'business' || topic === 'payments' || topic === 'lending') {
      productActions.unshift({
        label: copy.contactCta,
        href: `mailto:contact@cambobia.com?subject=${encodeURIComponent(
          lang === 'km' ? 'សំណួរពីគេហទំព័រ CamboBIA' : 'CamboBIA Website Inquiry'
        )}&body=${encodeURIComponent(mailBody)}`
      });
    }

    return productActions.slice(0, 3);
  };

  const normalizeApiActions = (payload, lang, copy) => {
    const productActions = Array.isArray(payload.recommendedProducts)
      ? payload.recommendedProducts
          .map((key) => siteAssistantProductActions[key])
          .filter(Boolean)
          .slice(0, 2)
          .map((item) => ({
            label: item[lang],
            href: item.href
          }))
      : [];

    if (payload.shouldOfferContact) {
      const recommendedLabels = productActions.map((item) => item.label).join(', ');
      const summary = payload.contactSummary || '';
      const latestUserMessage =
        conversationState.messages
          .filter((message) => message.role === 'user')
          .at(-1)?.content || '';

      const body = [
        lang === 'km' ? 'សួស្តី ក្រុមការងារ CamboBIA,' : 'Hello CamboBIA team,',
        '',
        lang === 'km'
          ? 'ខ្ញុំបានចូលមកតាមគេហទំព័រ CamboBIA ហើយចង់បន្តការពិភាក្សា។'
          : 'I came through the CamboBIA website and would like to continue the discussion.',
        summary ? `${lang === 'km' ? 'សេចក្តីសង្ខេប' : 'Summary'}: ${summary}` : '',
        latestUserMessage ? `${lang === 'km' ? 'អ្វីដែលខ្ញុំកំពុងស្វែងរក' : 'What I am looking for'}: ${latestUserMessage}` : '',
        recommendedLabels
          ? `${lang === 'km' ? 'វេទិកាដែលបានណែនាំ' : 'Recommended platforms'}: ${recommendedLabels}`
          : '',
        '',
        lang === 'km'
          ? 'សូមទាក់ទងមកខ្ញុំវិញជាមួយជំហានបន្ទាប់ដែលសមស្រប។'
          : 'Please contact me with the best next step.',
      ]
        .filter(Boolean)
        .join('\n');

      productActions.unshift({
        label: copy.contactCta,
        href: `mailto:contact@cambobia.com?subject=${encodeURIComponent(
          payload.contactSubject || 'CamboBIA Website Inquiry'
        )}&body=${encodeURIComponent(body)}`
      });
    }

    return productActions.slice(0, 3);
  };

  const setBusy = (isBusy, copy) => {
    conversationState.isBusy = isBusy;
    input.disabled = isBusy;
    sendButton.disabled = isBusy;
    sendButton.textContent = isBusy ? copy.thinking : copy.send;
  };

  const syncStatusText = (copy) => {
    status.textContent = conversationState.aiEnabled ? copy.statusLive : copy.statusFallback;
  };

  const refreshAssistantStatus = async (lang) => {
    if (conversationState.statusLoaded) {
      syncStatusText(siteAssistantCopy[lang]);
      return;
    }

    try {
      const response = await fetch('/api/assistant/status', {
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        const payload = await response.json();
        conversationState.aiEnabled = Boolean(payload.enabled);
      }
    } catch {
      conversationState.aiEnabled = false;
    } finally {
      conversationState.statusLoaded = true;
      syncStatusText(siteAssistantCopy[lang]);
    }
  };

  const submitAssistantMessage = async (value) => {
    const lang = document.documentElement.lang === 'km' ? 'km' : 'en';
    const copy = siteAssistantCopy[lang];
    const topic = detectTopic(value);

    appendMessage('user', value);
    openAssistant();

    conversationState.messages.push({
      role: 'user',
      content: value
    });

    if (!['greeting', 'thanks', 'followup'].includes(topic)) {
      conversationState.lastTopic = topic;
    }

    conversationState.turnCount += 1;
    input.value = '';

    if (conversationState.aiEnabled) {
      setBusy(true, copy);

      try {
        const response = await fetch('/api/assistant', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            lang,
            page: window.location.pathname,
            messages: conversationState.messages.slice(-8)
          })
        });

        if (!response.ok) {
          throw new Error(`Assistant request failed with ${response.status}`);
        }

        const payload = await response.json();
        const responseText = [payload.reply, payload.followUpQuestion].filter(Boolean).join(' ');
        appendMessage('bot', responseText);
        conversationState.messages.push({
          role: 'assistant',
          content: responseText
        });
        appendActionRow(normalizeApiActions(payload, lang, copy));
      } catch {
        conversationState.aiEnabled = false;

        if (!conversationState.fallbackNoticeShown) {
          appendMessage('bot', copy.fallbackNotice);
          conversationState.fallbackNoticeShown = true;
        }

        const fallbackReply = buildResponse(topic, copy);
        appendMessage('bot', fallbackReply);
        conversationState.messages.push({
          role: 'assistant',
          content: fallbackReply
        });
        appendActionRow(buildFallbackActions(topic, lang, copy, value));
      } finally {
        setBusy(false, copy);
        syncStatusText(copy);
      }

      return;
    }

    const fallbackReply = buildResponse(topic, copy);
    appendMessage('bot', fallbackReply);
    conversationState.messages.push({
      role: 'assistant',
      content: fallbackReply
    });
    appendActionRow(buildFallbackActions(topic, lang, copy, value));
    syncStatusText(copy);
  };

  const openAssistant = () => {
    panel.hidden = false;
    assistant.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    input.focus();
  };

  const closeAssistant = () => {
    panel.hidden = true;
    assistant.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    if (assistant.classList.contains('is-open')) {
      closeAssistant();
      return;
    }

    openAssistant();
  });

  closeButton.addEventListener('click', closeAssistant);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const value = input.value.trim();

    if (!value || conversationState.isBusy) {
      return;
    }

    submitAssistantMessage(value);
  });

  syncSiteAssistant = (lang) => {
    const copy = siteAssistantCopy[lang === 'km' ? 'km' : 'en'];

    toggle.setAttribute('aria-label', copy.toggleLabel);
    toggleText.textContent = copy.heading;
    title.textContent = copy.heading;
    syncStatusText(copy);
    input.placeholder = copy.inputPlaceholder;
    sendButton.textContent = conversationState.isBusy ? copy.thinking : copy.send;
    closeButton.setAttribute('aria-label', lang === 'km' ? 'បិទជំនួយការគេហទំព័រ' : 'Close site assistant');

    if (!messages.childElementCount) {
      appendMessage('bot', copy.intro);
    }

    refreshAssistantStatus(lang === 'km' ? 'km' : 'en');
  };

  syncSiteAssistant(document.documentElement.lang === 'km' ? 'km' : 'en');
};

mountSiteAssistant();
