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
    'Student Portal': 'វេទិកាសិស្ស',
    'Teacher Portal': 'វេទិកាគ្រូ',
    'Banking Skills Academy': 'សាលាជំនាញធនាគារ',
    'Micro-SME Platform': 'វេទិកា Micro-SME',
    'Micro-Lending Platform': 'វេទិកា Micro-Lending',
    'Broadcast messaging.': 'ការផ្សព្វផ្សាយសារជាក្រុម។',
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
    'Company Thesis': 'ទិសដៅក្រុមហ៊ុន',
    'CamboBIA is building a focused digital platform portfolio across communication, education, and operational finance.':
      'CamboBIA កំពុងកសាងក្រុមវេទិកាឌីជីថលដែលផ្តោតលើការទំនាក់ទំនង ការអប់រំ និងហិរញ្ញវត្ថុប្រតិបត្តិការ។',
    'The company story is not seven unrelated products. The company story is applied software for markets where business workflows, learning workflows, and operational record-keeping still have large room for digitization.':
      'រឿងរ៉ាវក្រុមហ៊ុនមិនមែនជាផលិតផល ៧ មុខដាច់ពីគ្នាទេ។ វាជាសូហ្វវែរ​ដែលអនុវត្តបានជាក់ស្តែងសម្រាប់ទីផ្សារដែលលំហូរអាជីវកម្ម ការសិក្សា និងកំណត់ត្រាប្រតិបត្តិការនៅតែមានឱកាសធំសម្រាប់ឌីជីថលកម្ម។',
    'Priority 01': 'អាទិភាព ០១',
    'Customer communication': 'ការទំនាក់ទំនងអតិថិជន',
    'Messenger Hub is the clearest growth entry for businesses that already depend on chat-based customer engagement.':
      'Messenger Hub ជាចំណុចចូលសម្រាប់ការលូតលាស់ដ៏ច្បាស់លាស់សម្រាប់អាជីវកម្មដែលពឹងផ្អែកលើការជជែកជាមួយអតិថិជន។',
    'Priority 02': 'អាទិភាព ០២',
    'SME operations': 'ប្រតិបត្តិការ SME',
    'Micro-SME Platform and Micro-Lending Platform address repeatable business operations with clearer software workflows.':
      'វេទិកា Micro-SME និង Micro-Lending ជួយដល់ប្រតិបត្តិការអាជីវកម្មដែលត្រូវធ្វើម្តងហើយម្តងទៀតដោយមានលំហូរសូហ្វវែរច្បាស់លាស់។',
    'Priority 03': 'អាទិភាព ០៣',
    'Education and training': 'ការអប់រំ និងការបណ្តុះបណ្តាល',
    'AI Learning Center creates a longer-term learning vertical across school and banking-training use cases.':
      'AI Learning Center បង្កើតផ្នែកសិក្សារយៈពេលវែងសម្រាប់សាលារៀន និងការបណ្តុះបណ្តាលវិស័យធនាគារ។',
    'Start Here': 'ចាប់ផ្តើមនៅទីនេះ',
    'Start with the audience, not the software.': 'ចាប់ផ្តើមពីអ្នកប្រើ មិនមែនពីសូហ្វវែរ។',
    'Choose the closest role below and follow the most useful CamboBIA entry point first.':
      'ជ្រើសរើសតួនាទីដែលជិតស្និទ្ធបំផុតខាងក្រោម ហើយចាប់ផ្តើមពីចំណុចចូលរបស់ CamboBIA ដែលមានប្រយោជន៍បំផុត។',
    'Sales teams': 'ក្រុមលក់',
    'Reach customers and capture orders.': 'ឈានដល់អតិថិជន និងទទួលការបញ្ជាទិញ។',
    'Best starting mix: Messenger Hub for campaigns, then Micro-SME Platform for Telegram-led selling.':
      'ការចាប់ផ្តើមល្អបំផុត៖ Messenger Hub សម្រាប់យុទ្ធនាការ បន្ទាប់មក Micro-SME Platform សម្រាប់ការលក់តាម Telegram។',
    'Typical fit: stores, resellers, customer-service teams, and operators who need both outreach and conversation-based selling.':
      'សមស្របសម្រាប់ហាង អ្នកចែកចាយ ក្រុមសេវាកម្មអតិថិជន និងអ្នកប្រតិបត្តិការដែលត្រូវការទាំងការផ្សព្វផ្សាយ និងការលក់តាមការសន្ទនា។',
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
    'Typical fit: microfinance operators, trading businesses, and hybrid SMEs that need both commerce tools and structured financial records.':
      'សមស្របសម្រាប់ប្រតិបត្តិករហិរញ្ញវត្ថុខ្នាតតូច អាជីវកម្មជួញដូរ និង SME ដែលរួមបញ្ចូលគ្នាដែលត្រូវការទាំងឧបករណ៍ពាណិជ្ជកម្ម និងកំណត់ត្រាហិរញ្ញវត្ថុដែលមានរបៀបរៀបរយ។',
    'See operations path': 'មើលផ្លូវប្រតិបត្តិការ',
    'Recommended Pairings': 'ការផ្គូផ្គងដែលបានណែនាំ',
    'Choose the platform combination that fits your business operation.': 'ជ្រើសរើសការរួមបញ្ចូលវេទិកាដែលសមស្របនឹងប្រតិបត្តិការអាជីវកម្មរបស់អ្នក។',
    'Most organizations get better results by pairing one customer-facing system with one operational or learning system.':
      'អង្គការភាគច្រើនទទួលបានលទ្ធផលល្អជាងមុនពេលផ្គូផ្គងប្រព័ន្ធមួយសម្រាប់អតិថិជនជាមួយប្រព័ន្ធប្រតិបត្តិការ ឬការសិក្សា។',
    'Sales and Orders': 'ការលក់ និងការបញ្ជាទិញ',
    'Recommended Stack': 'សំណុំប្រព័ន្ធណែនាំ',
    'Messenger Hub + Micro-SME Platform': 'Messenger Hub + Micro-SME Platform',
    'Use Messenger Hub to broadcast offers and CXDot to continue the conversation through AI-assisted buying, product inquiry, and order handling.':
      'ប្រើ Messenger Hub ដើម្បីផ្សព្វផ្សាយការផ្តល់ជូន ហើយប្រើ CXDot ដើម្បីបន្តការសន្ទនាតាមរយៈការទិញដោយជំនួយ AI សំណួរអំពីផលិតផល និងការគ្រប់គ្រងការបញ្ជាទិញ។',
    'Best when the business wants one channel for high-volume promotion and another for guided customer conversations that convert into orders.':
      'សមស្របបំផុតពេលអាជីវកម្មត្រូវការឆានែលមួយសម្រាប់ការផ្សព្វផ្សាយទំហំធំ និងឆានែលមួយទៀតសម្រាប់ការសន្ទនាជាមួយអតិថិជនដែលនាំទៅរកការបញ្ជាទិញ។',
    'Reach customers': 'ឈានដល់អតិថិជន',
    'Capture orders': 'ទទួលការបញ្ជាទិញ',
    'Continue bot conversations': 'បន្តការសន្ទនាតាមបុត',
    'View Messenger Hub': 'មើល Messenger Hub',
    'View CXDot Stack': 'មើលសំណុំ CXDot',
    'Commerce and Lending': 'ពាណិជ្ជកម្ម និងឥណទាន',
    'Micro-SME Platform + Micro-Lending Platform': 'Micro-SME Platform + Micro-Lending Platform',
    'Use CXDot for conversational commerce, trading inquiry, POS, and stock flow, then use DBank for borrower records, repayments, and lending books.':
      'ប្រើ CXDot សម្រាប់ពាណិជ្ជកម្មតាមការសន្ទនា សំណួរជួញដូរ POS និងលំហូរស្តុក បន្ទាប់មកប្រើ DBank សម្រាប់កំណត់ត្រាអ្នកខ្ចី ការសងប្រាក់ និងសៀវភៅឥណទាន។',
    'Best when the same business serves customers through sales and also manages loan, repayment, or borrower operations behind the scenes.':
      'សមស្របបំផុតពេលអាជីវកម្មតែមួយបម្រើអតិថិជនតាមរយៈការលក់ ហើយក៏គ្រប់គ្រងប្រាក់កម្ចី ការសងប្រាក់ ឬប្រតិបត្តិការអ្នកខ្ចីនៅខាងក្រោយផងដែរ។',
    'Sell and trade': 'លក់ និងជួញដូរ',
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
    'Learning center': 'មជ្ឈមណ្ឌលសិក្សា',
    'Student portal page': 'ទំព័រវេទិកាសិស្ស',
    'Teacher portal page': 'ទំព័រវេទិកាគ្រូ',
    'Banking skills page': 'ទំព័រជំនាញធនាគារ',
    'AI-assisted conversational commerce for sales, trading, support, and checkout.': 'ពាណិជ្ជកម្មតាមការសន្ទនាដោយជំនួយ AI សម្រាប់ការលក់ ការជួញដូរ ការគាំទ្រ និងការទូទាត់។',
    'Let customers buy through conversational bots': 'អនុញ្ញាតឲ្យអតិថិជនទិញតាមរយៈ bot សន្ទនា',
    'Support gold, FX, and sales inquiries': 'គាំទ្រសំណួរអំពីមាស FX និងការលក់',
    'Handle stock, POS, and guided financial conversations': 'គ្រប់គ្រងស្តុក POS និងការសន្ទនាហិរញ្ញវត្ថុដែលមានការណែនាំ',
    'Best for: micro-SMEs, conversational commerce, AI-led customer engagement':
      'សមស្របសម្រាប់៖ អាជីវកម្មខ្នាតតូច ពាណិជ្ជកម្មតាមការសន្ទនា និងការចូលរួមអតិថិជនដោយ AI',
    'Visit Micro-SME Platform': 'ចូលទៅវេទិកា Micro-SME',
    'Micro-lending platform for borrower and loan records.': 'វេទិកាឥណទានខ្នាតតូចសម្រាប់កំណត់ត្រាអ្នកខ្ចី និងប្រាក់កម្ចី។',
    'Manage borrower profiles': 'គ្រប់គ្រងប្រវត្តិអ្នកខ្ចី',
    'Track loans and repayments': 'តាមដានប្រាក់កម្ចី និងការសងប្រាក់',
    'Keep lending books organized': 'រក្សាសៀវភៅឥណទានឲ្យមានរបៀបរៀបរយ',
    'Best for: micro lenders, borrower tracking, loan books': 'សមស្របសម្រាប់៖ អ្នកឥណទានខ្នាតតូច ការតាមដានអ្នកខ្ចី និងសៀវភៅឥណទាន',
    'Visit Micro-Lending Platform': 'ចូលទៅវេទិកា Micro-Lending',
    'Memory game for focus and attention practice.': 'ហ្គេមចងចាំសម្រាប់ហ្វឹកហាត់ការផ្តោតអារម្មណ៍ និងការយកចិត្តទុកដាក់។',
    'Train recall with matching play': 'ហ្វឹកហាត់ការចងចាំតាមរយៈការផ្គូផ្គង',
    'Browser-based and simple to access': 'ប្រើបានតាម browser និងចូលប្រើបានងាយ',
    'Works alongside learning activities': 'ដំណើរការជាមួយសកម្មភាពសិក្សាបានល្អ',
    'Best for: learning support, focus, memory practice': 'សមស្របសម្រាប់៖ ការគាំទ្រការសិក្សា ការផ្តោតអារម្មណ៍ និងការហ្វឹកហាត់ការចងចាំ',
    'Play Pair Me Up': 'លេង Pair Me Up',
    'Operating Footprint': 'ស្នាមជើងប្រតិបត្តិការ',
    'Current public footprint investors can verify today.': 'ស្ថានភាពសាធារណៈបច្ចុប្បន្នដែលវិនិយោគិនអាចផ្ទៀងផ្ទាត់បានថ្ងៃនេះ។',
    'These are public, visible signals of operating momentum. Detailed commercial metrics can be shared through a private investor brief.':
      'ទាំងនេះជាសញ្ញាសាធារណៈដែលអាចមើលឃើញពីសន្ទុះប្រតិបត្តិការ។ ទិន្នន័យពាណិជ្ជកម្មលម្អិតអាចចែករំលែកតាមរយៈសង្ខេបវិនិយោគឯកជន។',
    'Core public products': 'ផលិតផលសាធារណៈស្នូល',
    'Messenger Hub, AI Learning Center, Micro-SME Platform, Micro-Lending Platform, and Pair Me Up are already presented through a public website with supporting student and teacher portals.':
      'Messenger Hub, AI Learning Center, វេទិកា Micro-SME, វេទិកា Micro-Lending និង Pair Me Up ត្រូវបានបង្ហាញរួចហើយតាមរយៈគេហទំព័រសាធារណៈ ជាមួយវេទិកាគាំទ្រសិស្ស និងគ្រូ។',
    'This gives investors a visible product surface they can review today, rather than a concept-stage narrative without operating proof.':
      'នេះផ្តល់ឲ្យវិនិយោគិននូវផ្ទៃផលិតផលដែលអាចមើលឃើញ និងពិនិត្យបានភ្លាមៗ ជំនួសឲ្យការរៀបរាប់គំនិតដែលមិនទាន់មានភស្តុតាងប្រតិបត្តិការ។',
    'Primary market wedges': 'ច្រកចូលទីផ្សារសំខាន់',
    'The strongest commercial entry points are customer communication, SME operations, lending records, and structured learning workflows for schools and banking-related training.':
      'ច្រកចូលពាណិជ្ជកម្មដែលខ្លាំងបំផុតគឺការទំនាក់ទំនងអតិថិជន ប្រតិបត្តិការ SME កំណត់ត្រាឥណទាន និងលំហូរការសិក្សាដែលមានរចនាសម្ព័ន្ធសម្រាប់សាលារៀន និងការបណ្តុះបណ្តាលពាក់ព័ន្ធនឹងធនាគារ។',
    'These are practical wedges because they map to repeatable daily processes where software can improve speed, consistency, visibility, and operating discipline.':
      'ទាំងនេះជាច្រកចូលជាក់ស្តែង ព្រោះវាភ្ជាប់ទៅនឹងដំណើរការប្រចាំថ្ងៃដែលកើតឡើងម្តងហើយម្តងទៀត ដែលសូហ្វវែរអាចបង្កើនល្បឿន ស្ថិរភាព ភាពមើលឃើញ និងវិន័យប្រតិបត្តិការ។',
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
    Learn: 'រៀន',
    'Train and prepare people': 'បណ្តុះបណ្តាល និងរៀបចំមនុស្ស',
    'Use the student portal, admin portal, Banking Skills Academy, and Pair Me Up to improve learning outcomes and focus.':
      'ប្រើវេទិកាសិស្ស វេទិកាគ្រប់គ្រង Banking Skills Academy និង Pair Me Up ដើម្បីបង្កើនលទ្ធផលសិក្សា និងការផ្តោតអារម្មណ៍។',
    Operate: 'ដំណើរការ',
    'Run cleaner daily operations': 'ដំណើរការប្រចាំថ្ងៃឲ្យមានរបៀបជាងមុន',
    'Use the Micro-SME Platform and Micro-Lending Platform to manage sales, stock, records, and lending activity.':
      'ប្រើវេទិកា Micro-SME និង Micro-Lending ដើម្បីគ្រប់គ្រងការលក់ ស្តុក កំណត់ត្រា និងសកម្មភាពឥណទាន។',
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
  switcher.innerHTML = `
    <button type="button" class="lang-button" data-lang-button="en">English</button>
    <button type="button" class="lang-button" data-lang-button="km">ខ្មែរ</button>
  `;

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
