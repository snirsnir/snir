// =====================
// Translations
// =====================
const translations = {
    en: {
        loading_text: 'Loading...',
        intro_hello: 'HELLO!',
        intro_name: 'my name is <span class="name-highlight">snir</span>',
        logo_name: 'Snir Doani',
        welcome: 'Welcome to my portfolio website',
        nav_home: 'Home',
        nav_about: 'About',
        nav_projects: 'Work Portfolio',
        nav_portfolio: 'Resume',
        nav_blog: 'Testimonials',
        nav_contact: 'Contact',
        badge_text: 'Nice to meet you',
        hero_title: 'Hi, I\'m<br><span class="name-gradient">Snir Doani</span>',
        hero_desc: 'Looking for a <strong>tech solution</strong> tailored exactly to your business?<br>Need a <strong>time tracking system</strong>, <strong>management dashboard</strong>, or a <strong>smart landing page</strong>?<br><br>I build custom WEB systems & applications — solutions that save <span class="shine-word">time</span><span class="shine-word">,</span> <span class="shine-word">money</span> <span class="shine-word">and</span> <span class="shine-word">resources</span>.<br>Reach out today — and we\'ll find the perfect tech tool for you.',
        cta_button: 'Let\'s Talk Today →',
        unlock_msg: '<strong>Wanna know about me? Win the challenges!</strong>',
        unlock_hint: 'Click on the locked menu items above to start the games',
        stat_years: 'Years Experience',
        stat_projects: 'Projects for Clients',
        stat_service: 'Service & Professionalism',
        locked_title: 'This section is locked',
        locked_hint: 'Win the challenge to unlock it',
        start_challenge: 'Click here to start the challenge',
        skip_challenge: "I don't have time, skip",
        about_title: 'About',
        about_desc: 'Information about my background, skills, and experience...',
        about_tag_location: '📍 Ramat Yishai',
        about_stat_service: 'Service',
        about_stat_avail: 'Availability',
        about_stat_passion: 'Passion',
        about_bio: 'With a rich tech background that started long before formal studies, I combine <strong>deep technical understanding</strong> with <strong>broad business vision</strong>.<br>My approach to development starts with listening to your needs, to build software solutions that are <strong>intuitive, robust, and tailor-made</strong>.',
        about_services_label: 'Services I Offer',
        about_svc1_desc: 'End-to-end digital solutions — Front-end & Back-end',
        about_svc2_title: 'Smart Management Systems',
        about_svc2_desc: 'Custom dashboards and time-reporting systems for your business',
        about_svc3_title: 'Automation & Efficiency',
        about_svc3_desc: 'Turning manual processes into automated ones to boost productivity',
        about_svc4_title: 'Landing Pages & Websites',
        about_svc4_desc: 'Conversion-focused design and development',
        about_featured: '<strong>Custom-built</strong> projects tailored to your needs!',
        about_avail: 'Available for projects as a <strong>freelancer</strong> — also open to interesting full-time offers',
        projects_title: 'Work Portfolio',
        projects_subtitle: 'Click on a project for more details',
        projects_desc: 'My latest projects and work...',
        portfolio_title: 'Resume',
        portfolio_desc: 'My professional resume & experience',
        blog_title: 'Testimonials',
        blog_desc: 'What people say about me',
        contact_title: "Let's Talk",
        contact_desc: "I'd love to hear from you on any topic — first Zoom call is free",
        contact_phone_label: 'Phone',
        contact_wa_text: 'Send a message now',
        contact_email_label: 'Email',
        form_name: 'Full Name',
        form_phone: 'Phone',
        form_email_label: 'Email',
        form_service_label: 'How can I help?',
        form_svc_default: 'Choose a topic',
        form_svc_website: 'Website / Landing Page',
        form_svc_ai: 'AI Agent / Automation',
        form_svc_system: 'Management System',
        form_svc_fullstack: 'Full Stack Development',
        form_svc_other: 'Other',
        form_message: 'Message',
        form_submit: 'Send Message',
        form_success_title: 'Message sent successfully!',
        form_success_desc: "I'll get back to you soon 🙏",
        placeholder_name: 'Your name',
        placeholder_phone: '050-XXX-XXXX',
        placeholder_email: 'your@email.com',
        placeholder_message: 'Tell me about your project...',
        footer_name: 'Snir Doani',
        footer_tagline: 'Full Stack Developer · AI Agent Specialist',
        choose_language: 'Choose Language',
        choose_theme: 'Choose a Theme',
        theme_blue: 'Blue',
        theme_purple: 'Purple',
        theme_green: 'Green',
        theme_orange: 'Orange',
        theme_rose: 'Rose',
        whatsapp_tooltip: 'Chat with me on WhatsApp! 💬',
        cv_view_btn: 'View Resume',
        cv_modal_title: 'My Resume',
        cv_download: 'Download PDF',
        ms_2011_role: 'Technical Support & Hardware Specialist',
        ms_2011_desc: 'Hardware & software diagnosis and repair, OS installations, networking.',
        ms_2012_role: 'Frontend Developer & Instructor',
        ms_2012_desc: 'Built experiential web applications, taught gifted students programming.',
        ms_2016_company: 'Mahat College — Studies',
        ms_2016_role: 'Practical Software Engineer',
        ms_2016_desc: 'B.Sc equivalent — Java, C#, data structures, algorithms.',
        ms_2018_company: 'Graduation + Full Stack',
        ms_2018_role: 'Advanced Full Stack Courses',
        ms_2018_desc: 'Node.js, React, Firebase, Cloud Technologies — first production projects.',
        ms_2021_company: 'Business Projects',
        ms_2021_role: 'Freelance Full Stack Developer',
        ms_2021_desc: 'Time tracking systems, landing pages, CRM and trading platforms.',
        ms_2024_company: 'AI Agents & Claude Code',
        ms_2024_role: 'AI Agent Specialist',
        ms_2024_desc: 'Building and deploying autonomous AI agents with Claude Code and MCP Servers.',
        wa_chat_name: 'Snir Doani',
        wa_chat_status: 'Online',
        wa_sender_1: 'Nir | Combat Fitness Trainer',
        wa_text_1: 'Snir built my entire trainee management system in a week. Fast, professional and knows exactly what\'s needed. Highly recommended!',
        wa_sender_2: 'Oren | Financial Manager',
        wa_text_2: 'He developed a complete time-reporting system that saves me hours every week. Clean code, intuitive interface and excellent support 🙌',
        wa_sender_3: 'Orit | Project Manager',
        wa_text_3: 'I worked with Snir on a landing page for our event — the result exceeded all expectations. Stunning design, on-time delivery and real personal attention 💯',
        game_subtitle: 'Win the game!',
        game_title_about: 'Wanna know about me?',
        game_title_projects: 'Want to see my work portfolio?',
        game_title_portfolio: 'Ready to see my resume?',
        game_title_blog: 'Want to see my testimonials?',
        game_title_contact: 'Want to get in touch?',
        rps_instruction: 'Best of 3 rounds - Win 2 to unlock!',
        rps_you: 'You',
        rps_computer: 'Computer',
        rps_you_chose: 'You chose',
        rps_computer_chose: 'Computer chose',
        rps_win: 'You Win!',
        rps_lose: 'You Lose!',
        rps_tie: 'Tie!',
        rps_gameover: 'Game Over! You lost. Try again!',
        rps_title: 'Rock, Paper & Scissors',
        rps_rock: 'Rock',
        rps_paper: 'Paper',
        rps_scissors: 'Scissors',
        rps_choose: 'Choose your weapon!',
        rps_thinking: 'Computer is thinking...',
        rps_round_win: 'Round won! 🎉',
        rps_round_lose: 'Round lost! 😞',
        rps_round_tie: "It's a tie! 🤝",
        rps_first_to: 'First to 2 wins!',
        dag_title: 'Red Light, Green Light',
        dag_green: 'Green Light — Run!',
        dag_red: 'Red Light — STOP!',
        dag_turning: '⚠️ Turning...',
        dag_hold: 'Hold to run!',
        dag_hint: '⌨️ Hold Space / → arrow  |  📱 Hold button below',
        dag_eliminated: 'You moved! You\'re out.',
        dag_win: '🎉 You reached her! You Win!',
        dag_try_again: 'Try Again',
        archery_title: 'Archery Challenge',
        archery_aim: 'Move mouse to aim · hold to charge · release to shoot!',
        archery_hint: '🖱️ Mouse: aim + hold | 📱 Touch: hold + swipe to aim',
        archery_fly: 'Arrow in flight…',
        archery_hit: 'Hit!',
        archery_bullseye: 'BULLSEYE! 🎯',
        archery_miss: 'Miss!',
        archery_win: '🎉 3 hits! You unlocked it!',
        archery_lose: 'Out of arrows!',
        archery_try_again: 'Try Again',
        race_title: '🏟️ Sprint Race',
        race_position: 'Position',
        race_speed: '⚡ SPRINT!',
        race_hint: 'Click / tap rapidly to sprint faster!',
        race_win: '🥇 You won! First place!',
        race_lose: 'Not first place...',
        race_try_again: 'Try Again',
        memory_instruction: 'Match all pairs to unlock!',
        quiz_question_label: 'Question',
        quiz_of: 'of',
        quiz_fail_msg: 'Not enough correct answers!',
        quiz_fail_hint: 'You need at least 2 correct answers. Try again!',
        try_again: 'Try Again',
        typing_instruction: 'Type the following text correctly within 30 seconds!',
        time_left: 'Time left:',
        times_up: "Time's up!",
        typing_fail: 'Try again to unlock this section!',
        math_instruction: 'Solve {n} math problems correctly!',
        math_progress: 'Progress',
        math_placeholder: 'Your answer',
        math_submit: 'Submit',
        math_correct: 'Correct! ✓',
        math_wrong: 'Wrong! Try again.',
        success_title: 'Congratulations!',
        success_msg: "You've unlocked this section!",
        continue_btn: 'Continue',
        quiz_questions: [
            {
                question: 'What does HTML stand for?',
                options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language'],
                correct: 0
            },
            {
                question: 'Which programming language is known as the "language of the web"?',
                options: ['Python', 'Java', 'JavaScript', 'C++'],
                correct: 2
            },
            {
                question: 'What does CSS stand for?',
                options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style Sheets', 'Colorful Style Sheets'],
                correct: 1
            }
        ]
    },
    he: {
        loading_text: 'טוען...',
        intro_hello: 'שלום!',
        intro_name: 'שמי הוא <span class="name-highlight">שניר</span>',
        logo_name: 'שניר דואני',
        welcome: 'ברוכים הבאים לאתר הפורטפוליו שלי',
        nav_home: 'בית',
        nav_about: 'אודות',
        nav_projects: 'תיק עבודות',
        nav_portfolio: 'קורות חיים',
        nav_blog: 'המלצות',
        nav_contact: 'צרו קשר',
        badge_text: 'נעים להכיר',
        hero_title: 'היי, שמי<br><span class="name-gradient">שניר דואני</span>',
        hero_desc: 'מחפשים <strong>פתרון טכנולוגי</strong> שתפור בדיוק לצרכים של העסק שלכם?<br>צריכים <strong>מערכת דיווח שעות</strong>, <strong>לוח ניהול מתקדם</strong> או <strong>דף נחיתה חכם</strong>?<br><br>אני מפתח מערכות WEB ואפליקציות בהתאמה אישית — פתרונות שחוסכים <span class="shine-word">זמן</span><span class="shine-word">,</span> <span class="shine-word">כסף</span> <span class="shine-word">ו</span><span class="shine-word">משאבים</span>.<br>פנו אליי עוד היום — ונתאים לכם את הכלי הטכנולוגי המושלם.',
        cta_button: 'פנו אליי עוד היום ←',
        unlock_msg: '<strong>רוצים לדעת עליי? נצחו את האתגרים!</strong>',
        unlock_hint: 'לחץ על פריטי התפריט הנעולים למעלה כדי להתחיל במשחקים',
        stat_years: 'שנות ניסיון',
        stat_projects: 'פרויקטים ללקוחות',
        stat_service: 'שירות ומקצועיות',
        locked_title: 'קטע זה נעול',
        locked_hint: 'נצחו את האתגר כדי לפתוח',
        start_challenge: 'לחצו כאן כדי לפתוח את האתגר',
        skip_challenge: 'אין לי זמן, דלג',
        about_title: 'אודות',
        about_desc: 'מידע על הרקע, הכישורים והניסיון שלי...',
        about_tag_location: '📍 רמת ישי',
        about_stat_service: 'בשירות',
        about_stat_avail: 'זמינות',
        about_stat_passion: 'תשוקה',
        about_bio: 'עם רקע טכנולוגי עשיר שמתחיל הרבה לפני הלימודים הפורמליים, אני משלב <strong>הבנה טכנית עמוקה</strong> עם <strong>ראייה עסקית רחבה</strong>.<br>הגישה שלי לפיתוח מתחילה קודם כל בהקשבה לצרכים שלכם, כדי לבנות פתרונות תוכנה <strong>אינטואיטיביים, חזקים ומותאמים אישית</strong>.',
        about_services_label: 'השירותים שאני מציע',
        about_svc1_desc: 'בניית פתרונות דיגיטליים מקצה לקצה — Front-end ו-Back-end',
        about_svc2_title: 'מערכות ניהול חכמות',
        about_svc2_desc: 'דשבורדים ומערכות דיווח שעות בהתאמה אישית לצרכי העסק',
        about_svc3_title: 'אוטומציה והתייעלות',
        about_svc3_desc: 'הפיכת תהליכים ידניים לאוטומטיים לשיפור הפרודוקטיביות',
        about_svc4_title: 'דפי נחיתה ואתרים',
        about_svc4_desc: 'עיצוב ופיתוח ממוקד המרה ותוצאות',
        about_featured: 'פרויקטים <strong>מותאמים אישית</strong> לצרכים שלכם!',
        about_avail: 'זמין לפרויקטים כ<strong>פרילאנסר</strong> — ופתוח גם להצעות למשרות מעניינות',
        projects_title: 'תיק עבודות',
        projects_subtitle: 'הקליקו על פרויקט לפרטים נוספים',
        projects_desc: 'הפרויקטים והעבודות האחרונים שלי...',
        portfolio_title: 'קורות חיים',
        portfolio_desc: 'קורות החיים והניסיון המקצועי שלי',
        blog_title: 'המלצות',
        blog_desc: 'מה אנשים אומרים עליי',
        contact_title: 'צור קשר',
        contact_desc: 'אשמח לשמוע מכם בכל נושא, שיחת זום ראשונה ללא עלות',
        contact_phone_label: 'טלפון',
        contact_wa_text: 'שלח הודעה עכשיו',
        contact_email_label: 'אימייל',
        form_name: 'שם מלא',
        form_phone: 'טלפון',
        form_email_label: 'אימייל',
        form_service_label: 'במה אוכל לעזור?',
        form_svc_default: 'בחר נושא',
        form_svc_website: 'אתר / דף נחיתה',
        form_svc_ai: 'סוכן AI / אוטומציה',
        form_svc_system: 'מערכת ניהול',
        form_svc_fullstack: 'פיתוח Full Stack',
        form_svc_other: 'אחר',
        form_message: 'הודעה',
        form_submit: 'שלח פנייה',
        form_success_title: 'ההודעה נשלחה בהצלחה!',
        form_success_desc: 'אחזור אליך בהקדם 🙏',
        placeholder_name: 'השם שלך',
        placeholder_phone: '050-XXX-XXXX',
        placeholder_email: 'האימייל שלך',
        placeholder_message: 'ספר לי על הפרויקט שלך...',
        footer_name: 'שניר דואני',
        footer_tagline: 'מפתח Full Stack | מומחה סוכני AI',
        choose_language: 'בחר שפה',
        choose_theme: 'בחרו ערכת נושא',
        theme_blue: 'כחול',
        theme_purple: 'סגול',
        theme_green: 'ירוק',
        theme_orange: 'כתום',
        theme_rose: 'ורוד',
        whatsapp_tooltip: 'דברו איתי בווצאפ! 💬',
        cv_view_btn: 'צפה בקורות החיים',
        cv_modal_title: 'קורות החיים שלי',
        cv_download: 'הורד PDF',
        ms_2011_role: 'תמיכה טכנית ומומחה חומרה',
        ms_2011_desc: 'אבחון ותיקון חומרה ותוכנה, התקנות מערכות הפעלה ורשתות.',
        ms_2012_role: 'מפתח Frontend ומדריך',
        ms_2012_desc: 'פיתוח אפליקציות Web חוויתיות, הדרכת תלמידים מחוננים בתכנות.',
        ms_2016_company: 'מת"ל — לימודים',
        ms_2016_role: 'הנדסאי תוכנה מוסמך',
        ms_2016_desc: 'תואר הנדסאי תוכנה — Java, C#, מבני נתונים, אלגוריתמים.',
        ms_2018_company: 'סיום לימודים + Full Stack',
        ms_2018_role: 'קורסי Full Stack מתקדמים',
        ms_2018_desc: 'Node.js, React, Firebase, Cloud — פרויקטים ראשונים בפרודקשן.',
        ms_2021_company: 'פרויקטים עסקיים',
        ms_2021_role: 'מפתח Full Stack עצמאי',
        ms_2021_desc: 'מערכות ניהול שעות, דפי נחיתה, מערכות CRM ומסחר.',
        ms_2024_company: 'AI Agents & Claude Code',
        ms_2024_role: 'מומחה סוכני AI',
        ms_2024_desc: 'בניית וטמיעת סוכני AI אוטונומיים עם Claude Code ו-MCP Servers.',
        wa_chat_name: 'שניר דואני',
        wa_chat_status: 'מקוון',
        wa_sender_1: 'ניר | מדריך כושר קרבי',
        wa_text_1: 'שניר בנה לי את כל המערכת לניהול המתאמנים תוך שבוע. מהיר, מקצועי ויודע בדיוק מה צריך. ממליץ בחום!',
        wa_sender_2: 'אורן | מנהל פיננסים',
        wa_text_2: 'פיתח עבורי מערכת דיווחי שעות מלאה שחסכה לי שעות עבודה כל שבוע. הקוד נקי, הממשק אינטואיטיבי והתמיכה מעולה 🙌',
        wa_sender_3: 'אורית | מנהלת פרויקטים',
        wa_text_3: 'עבדתי עם שניר על דף נחיתה לאירוע שלנו — התוצאה הייתה מעל הציפיות. עיצוב מרהיב, עמידה בלוחות זמנים ויחס אישי אמיתי 💯',
        game_subtitle: 'נצח במשחק!',
        game_title_about: 'רוצה לדעת עליי?',
        game_title_projects: 'רוצה לראות את תיק העבודות שלי?',
        game_title_portfolio: 'מוכן לראות את קורות החיים שלי?',
        game_title_blog: 'רוצה לראות את ההמלצות שלי?',
        game_title_contact: 'רוצה ליצור קשר?',
        rps_instruction: '3 סיבובים - נצח 2 כדי לפתוח!',
        rps_you: 'אתה',
        rps_computer: 'מחשב',
        rps_you_chose: 'אתה בחרת',
        rps_computer_chose: 'המחשב בחר',
        rps_win: 'ניצחת!',
        rps_lose: 'הפסדת!',
        rps_tie: 'תיקו!',
        rps_gameover: 'המשחק הסתיים! הפסדת. נסה שוב!',
        rps_title: 'אבן, נייר ומספריים',
        rps_rock: 'אבן',
        rps_paper: 'נייר',
        rps_scissors: 'מספריים',
        rps_choose: 'בחר את הנשק שלך!',
        rps_thinking: 'המחשב חושב...',
        rps_round_win: 'ניצחת את הסיבוב! 🎉',
        rps_round_lose: 'הפסדת את הסיבוב! 😞',
        rps_round_tie: 'תיקו! 🤝',
        rps_first_to: 'ראשון ל-2 מנצח!',
        dag_title: 'דג מלוח',
        dag_green: 'אור ירוק — רוץ!',
        dag_red: 'אור אדום — עצור!',
        dag_turning: '⚠️ מסתובבת...',
        dag_hold: 'אחוז לרוץ!',
        dag_hint: '⌨️ אחוז רווח / חץ ימין  |  📱 אחוז כפתור למטה',
        dag_eliminated: 'זזת! נפסלת.',
        dag_win: '🎉 הגעת אליה! ניצחת!',
        dag_try_again: 'נסה שוב',
        archery_title: 'חץ וקשת',
        archery_aim: 'הזז עכבר לכוון · החזק לטעון · שחרר לירות!',
        archery_hint: '🖱️ עכבר: כוון + החזק | 📱 מגע: החזק + החלק לכוון',
        archery_fly: 'החץ עף…',
        archery_hit: 'פגיעה!',
        archery_bullseye: 'בול עיגול! 🎯',
        archery_miss: 'פספסת!',
        archery_win: '🎉 3 פגיעות! פתחת את הקטע!',
        archery_lose: 'נגמרו החיצים!',
        archery_try_again: 'נסה שוב',
        race_title: '🏟️ מרוץ ספרינט',
        race_position: 'מקום',
        race_speed: '⚡ ספרינט!',
        race_hint: 'לחץ / הקש מהר כדי לרוץ מהר יותר!',
        race_win: '🥇 ניצחת! מקום ראשון!',
        race_lose: 'לא מקום ראשון...',
        race_try_again: 'נסה שוב',
        memory_instruction: 'התאם את כל הזוגות כדי לפתוח!',
        quiz_question_label: 'שאלה',
        quiz_of: 'מתוך',
        quiz_fail_msg: 'לא מספיק תשובות נכונות!',
        quiz_fail_hint: 'אתה צריך לפחות 2 תשובות נכונות. נסה שוב!',
        try_again: 'נסה שוב',
        typing_instruction: 'הקלד את הטקסט הבא נכון תוך 30 שניות!',
        time_left: 'זמן שנותר:',
        times_up: 'הזמן נגמר!',
        typing_fail: 'נסה שוב כדי לפתוח את הקטע הזה!',
        math_instruction: 'פתור {n} בעיות מתמטיקה נכון!',
        math_progress: 'התקדמות',
        math_placeholder: 'תשובתך',
        math_submit: 'שלח',
        math_correct: 'נכון! ✓',
        math_wrong: 'שגוי! נסה שוב.',
        success_title: 'כל הכבוד!',
        success_msg: 'פתחת את הקטע הזה!',
        continue_btn: 'המשך',
        quiz_questions: [
            {
                question: 'מה המשמעות של HTML?',
                options: ['שפת סימון טקסט היפרטקסטואלי', 'שפה טכנולוגית מודרנית', 'כלי תצוגה ביתי', 'קישורים וטקסט היפרטקסטואלי'],
                correct: 0
            },
            {
                question: 'איזו שפת תכנות מכונה "שפת הרשת"?',
                options: ['Python', 'Java', 'JavaScript', 'C++'],
                correct: 2
            },
            {
                question: 'מה המשמעות של CSS?',
                options: ['גיליונות סגנון מחשב', 'גיליונות סגנון מדורגים', 'גיליונות סגנון יצירתיים', 'גיליונות סגנון צבעוניים'],
                correct: 1
            }
        ]
    }
};

// =====================
// Language Management
// =====================
let currentLanguage = localStorage.getItem('language') || 'en';

function t(key) {
    return translations[currentLanguage][key] !== undefined
        ? translations[currentLanguage][key]
        : (translations['en'][key] !== undefined ? translations['en'][key] : key);
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);

    // Update html lang and dir attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';

    // Update all plain-text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.dataset.i18n);
    });

    // Update all HTML-content elements
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        el.innerHTML = t(el.dataset.i18nHtml);
    });

    // Update all placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = t(el.dataset.i18nPlaceholder);
    });

    // Update active state of language buttons
    const btnEn = document.getElementById('lang-en');
    const btnHe = document.getElementById('lang-he');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');
    if (btnHe) btnHe.classList.toggle('active', lang === 'he');

    // Re-render projects grid with translated content
    renderProjectsGrid();

    // Redraw timeline wave — direction change shifts physical dot positions
    requestAnimationFrame(() => requestAnimationFrame(drawTimelineWave));
}

function initLanguage() {
    const btnEn = document.getElementById('lang-en');
    const btnHe = document.getElementById('lang-he');

    if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));
    if (btnHe) btnHe.addEventListener('click', () => setLanguage('he'));

    // Apply saved or default language
    setLanguage(currentLanguage);
}

// =====================
// Game State Management
// =====================
const gameState = {
    unlockedSections: JSON.parse(localStorage.getItem('unlockedSections')) || [],
    currentSection: null,
    games: {
        about: 'rock-paper-scissors',
        projects: 'memory',
        portfolio: 'dag-maluach',
        blog: 'archery',
        contact: 'sprint-race'
    }
};

// =====================
// CV Timeline
// =====================
function drawTimelineWave() {
    const timeline = document.querySelector('.cv-timeline');
    if (!timeline) return;

    // Remove any existing wave SVG
    const existing = timeline.querySelector('svg.timeline-wave');
    if (existing) existing.remove();

    const milestones = [...timeline.querySelectorAll('.cv-milestone')];
    if (milestones.length < 2) return;

    const W   = timeline.offsetWidth;
    const H   = timeline.offsetHeight;
    if (!W || !H) return; // not visible yet

    // Dot CSS values (must match styles.css)
    const DOT_SIZE    = 18;   // px, matches .cv-milestone-dot width/height
    const PADDING     = 10;   // matches .cv-timeline padding
    const TOP_ODD     = 40;  // nth-child(odd)  dot top
    const TOP_EVEN    = 150;   // nth-child(even) dot top

    const n         = milestones.length;
    const itemW     = (W - PADDING * 2) / n;
    const isRTL     = document.documentElement.dir === 'rtl';

    // Build point for each milestone using known CSS values
    const pts = milestones.map((_, i) => {
        const domIndex = i + 1;                         // 1-indexed
        const dotTop   = domIndex % 2 === 1 ? TOP_ODD : TOP_EVEN;
        const y        = dotTop + DOT_SIZE / 2;         // dot center y

        // x: center of the milestone in physical left-to-right coords
        const xLTR = PADDING + (i + 0.5) * itemW;
        const x    = isRTL ? W - xLTR : xLTR;

        return { x, y };
    });

    // Sort left → right so the wave always flows from left to right
    pts.sort((a, b) => a.x - b.x);

    // Build smooth S-curve (cubic bezier, control points at mid-x)
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[i], p1 = pts[i + 1];
        const mx = (p0.x + p1.x) / 2;
        d += ` C ${mx} ${p0.y}, ${mx} ${p1.y}, ${p1.x} ${p1.y}`;
    }

    const ns  = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.classList.add('timeline-wave');
    svg.setAttribute('width',  W);
    svg.setAttribute('height', H);
    svg.style.cssText = 'position:absolute;top:0;left:0;pointer-events:none;overflow:visible;z-index:0;';

    // Glow
    const glow = document.createElementNS(ns, 'path');
    glow.setAttribute('d', d);
    glow.setAttribute('fill', 'none');
    glow.setAttribute('stroke', 'var(--primary)');
    glow.setAttribute('stroke-width', '6');
    glow.setAttribute('stroke-linecap', 'round');
    glow.setAttribute('opacity', '0.25');
    glow.style.filter = 'blur(4px)';
    svg.appendChild(glow);

    // Main line
    const line = document.createElementNS(ns, 'path');
    line.setAttribute('d', d);
    line.setAttribute('fill', 'none');
    line.setAttribute('stroke', 'var(--primary)');
    line.setAttribute('stroke-width', '2.5');
    line.setAttribute('stroke-linecap', 'round');
    svg.appendChild(line);

    timeline.insertBefore(svg, timeline.firstChild);
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    const iframe = document.getElementById('contact-iframe');
    const success = document.getElementById('form-success');
    if (!form || !iframe || !success) return;

    form.addEventListener('submit', () => {
        iframe.onload = () => {
            form.style.display = 'none';
            success.style.display = 'flex';
            iframe.onload = null;
        };
    });
}

function initCVTimeline() {
    const timeline = document.querySelector('.cv-timeline');
    if (!timeline) return;

    // Click / tap to show popup (mobile)
    document.querySelectorAll('.cv-milestone').forEach(ms => {
        ms.addEventListener('click', () => {
            const isActive = ms.classList.contains('active');
            document.querySelectorAll('.cv-milestone').forEach(m => m.classList.remove('active'));
            if (!isActive) ms.classList.add('active');
        });
    });

    // Close when clicking outside the timeline
    document.addEventListener('click', e => {
        if (!timeline.contains(e.target)) {
            document.querySelectorAll('.cv-milestone').forEach(m => m.classList.remove('active'));
        }
    });

    // Draw wave after layout is ready
    requestAnimationFrame(() => {
        requestAnimationFrame(drawTimelineWave);
    });
    window.addEventListener('resize', drawTimelineWave);
}

// =====================
// CV Modal
// =====================
function initCVModal() {
    const overlay = document.getElementById('cv-modal-overlay');
    const openBtn = document.getElementById('cv-open-btn');
    const closeBtn = document.getElementById('cv-modal-close-btn');
    const iframe = document.getElementById('cv-modal-iframe');
    const dlBtn = document.getElementById('cv-modal-download');
    if (!overlay || !openBtn) return;

    function openCVModal() {
        const lang = document.documentElement.lang || 'he';
        iframe.src = lang === 'he' ? 'cvHeb.html' : 'cv.html';
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeCVModal() {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
        setTimeout(() => { iframe.src = ''; }, 300);
    }

    openBtn.addEventListener('click', openCVModal);
    closeBtn.addEventListener('click', closeCVModal);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeCVModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCVModal(); });
    dlBtn.addEventListener('click', () => {
        try { iframe.contentWindow.print(); } catch { window.open(iframe.src, '_blank'); }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initDarkMode();
    initTheme();
    initIntroAnimation();
    initNavigation();
    loadUnlockedSections();
    initLanguage();
    initNavbarScroll();
    renderProjectsGrid();
    initProjectModal();
    initCVTimeline();
    initCVModal();
    initContactForm();
});

// =====================
// Projects Grid
// =====================
const projectsData = [
    {
        title: 'מסע אל העבר',
        titleEn: 'Journey to the Past',
        cat: 'אתר',
        catEn: 'Website',
        img: 'images/masa1.png',
        imgs: ['images/masa1.png','images/masa2.png','images/mada3.png','images/masa4.png','images/masa5.png','images/masa6.png'],
        link: 'https://github.com/snirsnir/dave/releases',
        short: 'אתר חוויתי ואינטראקטיבי המשלב תוכן היסטורי עם עיצוב מודרני.',
        shortEn: 'An experiential and interactive website combining rich historical content with modern design.',
        desc: 'אתר חוויתי ואינטראקטיבי המשלב תוכן היסטורי עשיר עם עיצוב מודרני ומרתק. הפרויקט פותח במטרה לגרום לגולשים לחוות ולהתחבר לעבר בצורה חדשה ומעניינת, תוך שימוש באנימציות ובעיצוב ייחודי.',
        descEn: 'An experiential and interactive website combining rich historical content with captivating modern design. The project was developed to give users a new and exciting way to experience and connect with the past, using unique animations and distinctive visual design.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    },
    {
        title: 'TH — מערכת דיווחי שעות חכמה',
        titleEn: 'TH — Smart Time Reporting System',
        cat: 'מערכת ניהול',
        catEn: 'Management System',
        img: 'images/hours1.png',
        imgs: ['images/hours1.png','images/hours2.png','images/hours3.png','images/hours4.png','images/hours5.png','images/hours6.png','images/hours7.png'],
        note: '🔒 מערכת פנימית לעובדים — לא זמינה לצפייה ציבורית',
        noteEn: '🔒 Internal employee system — not available for public viewing',
        short: 'מערכת דיווח שעות מקצה לקצה לניהול עובדים, פרויקטים ודוחות.',
        shortEn: 'End-to-end time reporting system for managing employees, projects, and reports.',
        desc: 'מערכת Web מלאה לניהול דיווחי שעות עבור עסקים. כוללת ניהול עובדים, פרויקטים, לוח שנה חכם, דוחות אוטומטיים ויצוא נתונים — כל מה שעסק צריך כדי לנהל זמן בצורה חכמה ומדויקת.',
        descEn: 'A complete web system for managing time reports for businesses. Includes employee management, projects, a smart calendar, automated reports, and data export — everything a business needs to manage time smartly and accurately.',
        tech: ['React', 'Node.js', 'MySQL', 'REST API'],
    },
    {
        title: 'דף נחיתה — נשים מובילות מדע',
        titleEn: 'Landing Page — Women Leading Science',
        cat: 'דף נחיתה',
        catEn: 'Landing Page',
        img: 'images/120.png',
        imgs: ['images/120.png'],
        iframe: 'https://snirsnir.github.io/120/',
        short: 'דף נחיתה ממוקד המרה עבור אירוע "נשים מובילות מדע".',
        shortEn: 'Conversion-focused landing page for the "Women Leading Science" event.',
        desc: 'דף נחיתה מרשים ועוצמתי שעוצב ופותח עבור אירוע "נשים מובילות מדע". הדף כולל עיצוב ייחודי, אנימציות עדינות, טופס הרשמה חכם וממשק מלא למובייל — עם דגש על המרות ויצירת עניין.',
        descEn: 'An impressive and powerful landing page designed and developed for the "Women Leading Science" event. The page features unique design, subtle animations, a smart registration form and full mobile interface — with an emphasis on conversions and generating interest.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    },
    {
        title: 'דף נחיתה — הפנינג מסע אל העבר',
        titleEn: 'Landing Page — Journey to the Past Happening',
        cat: 'דף נחיתה',
        catEn: 'Landing Page',
        img: 'images/masa.png',
        imgs: ['images/masa.png','images/masa1.png','images/masa2.png','images/masa3.png','images/masa4.png','images/masa5.png','images/masa6.png'],
        iframe: 'https://snirsnir.github.io/landingMasa/',
        short: 'דף נחיתה לאירוע הפנינג מסע אל העבר עם חוויית משתמש ייחודית.',
        shortEn: 'Landing page for the Journey to the Past happening event with a unique user experience.',
        desc: 'דף נחיתה ייחודי ומרהיב שנבנה עבור אירוע ההפנינג "מסע אל העבר". העיצוב שואב השראה מאסתטיקה היסטורית תוך שמירה על ממשק מודרני. כולל קאונטדאון לאירוע, גלריה ומערכת רישום.',
        descEn: 'A unique and stunning landing page built for the "Journey to the Past" happening event. The design draws inspiration from historical aesthetics while maintaining a modern interface. Includes an event countdown, gallery, and registration system.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Animation'],
    },
    {
        title: 'מערכת מסחר חכמה משולבת AI',
        titleEn: 'AI-Powered Smart Trading System',
        cat: 'מערכת AI',
        catEn: 'AI System',
        img: 'images/trade1.jpeg',
        imgs: ['images/trade1.jpeg','images/trad2.jpeg','images/trade3.jpeg'],
        note: '⚡ גרסת Beta — תשווק בקרוב',
        noteEn: '⚡ Beta version — launching soon',
        short: 'פלטפורמת מסחר מתקדמת עם ניתוח AI בזמן אמת.',
        shortEn: 'Advanced trading platform with real-time AI analysis.',
        desc: 'מערכת מסחר מתקדמת המשלבת אלגוריתמים של בינה מלאכותית לניתוח שוק בזמן אמת. המערכת מספקת תובנות, איתותים ועזרה בקבלת החלטות מסחריות — כל זה עם ממשק נקי ואינטואיטיבי.',
        descEn: 'An advanced trading system integrating artificial intelligence algorithms for real-time market analysis. The system provides insights, signals, and decision-making assistance — all with a clean and intuitive interface.',
        tech: ['Python', 'React', 'AI/ML', 'WebSocket', 'REST API'],
    },
    {
        title: 'מערכת ניהול הכנסות ברוקרים',
        titleEn: 'Broker Revenue Management System',
        cat: 'מערכת ניהול',
        catEn: 'Management System',
        img: 'images/brok1.png',
        imgs: ['images/brok1.png','images/brok2.png','images/brokers1.png'],
        note: '🔒 מערכת פנימית לעובדים — לא זמינה לצפייה ציבורית',
        noteEn: '🔒 Internal employee system — not available for public viewing',
        short: 'פלטפורמה לניהול ומעקב הכנסות עבור ברוקרים ומתווכים.',
        shortEn: 'Platform for managing and tracking revenue for brokers and agents.',
        desc: 'מערכת ניהול מקיפה שנבנתה עבור ברוקרים ומתווכים לניהול, מעקב ודיווח על הכנסות ועמלות. כוללת דשבורד אנליטי, ניהול לקוחות, מעקב עסקאות ודוחות מפורטים לתכנון פיננסי.',
        descEn: 'A comprehensive management system built for brokers and agents to manage, track, and report on revenues and commissions. Includes an analytics dashboard, client management, transaction tracking, and detailed reports for financial planning.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
    },
];

const CAT_COLORS = {
    'אתר':              { bg: 'rgba(14,165,233,0.15)',  text: '#0EA5E9' },
    'מערכת ניהול':      { bg: 'rgba(168,85,247,0.15)',  text: '#a855f7' },
    'דף נחיתה':         { bg: 'rgba(34,197,94,0.15)',   text: '#22c55e' },
    'מערכת AI':         { bg: 'rgba(251,191,36,0.15)',  text: '#fbbf24' },
    'Website':          { bg: 'rgba(14,165,233,0.15)',  text: '#0EA5E9' },
    'Management System':{ bg: 'rgba(168,85,247,0.15)',  text: '#a855f7' },
    'Landing Page':     { bg: 'rgba(34,197,94,0.15)',   text: '#22c55e' },
    'AI System':        { bg: 'rgba(251,191,36,0.15)',  text: '#fbbf24' },
};

function renderProjectsGrid() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    const isEn = currentLanguage === 'en';
    const overlayLabel = isEn ? 'More Details ↗' : 'פרטים נוספים ↗';
    grid.innerHTML = projectsData.map((p, i) => {
        const displayCat = isEn ? (p.catEn || p.cat) : p.cat;
        const displayTitle = isEn ? (p.titleEn || p.title) : p.title;
        const displayShort = isEn ? (p.shortEn || p.short) : p.short;
        const cat = CAT_COLORS[displayCat] || { bg: 'rgba(148,163,184,0.15)', text: '#94a3b8' };
        return `
        <div class="project-card" data-project="${i}" tabindex="0" role="button">
            <div class="project-card-img-wrap">
                <img src="${p.img}" alt="${displayTitle}" class="project-card-img" loading="lazy"
                     onerror="this.parentElement.classList.add('no-img')">
                <div class="project-card-overlay"><span>${overlayLabel}</span></div>
            </div>
            <div class="project-card-info">
                <span class="project-card-cat" style="background:${cat.bg};color:${cat.text}">${displayCat}</span>
                <h3 class="project-card-title">${displayTitle}</h3>
                <p class="project-card-short">${displayShort}</p>
            </div>
        </div>`;
    }).join('');
}

function initProjectModal() {
    const overlay = document.getElementById('proj-modal-overlay');
    const closeBtn = document.getElementById('proj-modal-close');
    if (!overlay) return;

    let currentProject = null;
    let galleryIdx = 0;

    function updateGalleryImage() {
        const imgs = currentProject.imgs || [currentProject.img];
        const imgEl = document.getElementById('proj-modal-img');
        const counter = document.getElementById('proj-gallery-counter');
        const prevBtn = document.getElementById('proj-gallery-prev');
        const nextBtn = document.getElementById('proj-gallery-next');
        imgEl.src = imgs[galleryIdx];
        if (imgs.length > 1) {
            counter.textContent = `${galleryIdx + 1} / ${imgs.length}`;
            counter.style.display = 'block';
            prevBtn.style.display = 'flex';
            nextBtn.style.display = 'flex';
        } else {
            counter.style.display = 'none';
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        }
    }

    function openModal(idx) {
        const p = projectsData[idx];
        currentProject = p;
        galleryIdx = 0;
        const isEn = currentLanguage === 'en';
        const displayCat   = isEn ? (p.catEn   || p.cat)   : p.cat;
        const displayTitle = isEn ? (p.titleEn || p.title) : p.title;
        const displayDesc  = isEn ? (p.descEn  || p.desc)  : p.desc;
        const displayNote  = isEn ? (p.noteEn  || p.note)  : p.note;
        const cat = CAT_COLORS[displayCat] || { bg: 'rgba(148,163,184,0.15)', text: '#94a3b8' };
        document.getElementById('proj-modal-img').alt = displayTitle;
        document.getElementById('proj-modal-cat').textContent = displayCat;
        document.getElementById('proj-modal-cat').style.cssText = `background:${cat.bg};color:${cat.text}`;
        document.getElementById('proj-modal-title').textContent = displayTitle;
        document.getElementById('proj-modal-desc').textContent = displayDesc;
        document.getElementById('proj-modal-tech').innerHTML =
            p.tech.map(t => `<span class="proj-tech-tag">${t}</span>`).join('');
        const linkEl = document.getElementById('proj-modal-link');
        if (p.link) {
            linkEl.href = p.link;
            linkEl.style.display = 'inline-flex';
        } else {
            linkEl.style.display = 'none';
        }
        const noteEl = document.getElementById('proj-modal-note');
        if (displayNote) {
            noteEl.textContent = displayNote;
            noteEl.style.display = 'block';
        } else {
            noteEl.style.display = 'none';
        }
        const iframeWrap = document.getElementById('proj-modal-iframe-wrap');
        const iframeEl = document.getElementById('proj-modal-iframe');
        const iframeOpenBtn = document.getElementById('proj-iframe-open-btn');
        if (p.iframe) {
            iframeEl.src = p.iframe;
            iframeOpenBtn.href = p.iframe;
            iframeWrap.style.display = 'block';
        } else {
            iframeEl.src = '';
            iframeWrap.style.display = 'none';
        }
        updateGalleryImage();
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
        document.getElementById('proj-modal-iframe').src = '';
    }

    document.getElementById('proj-gallery-prev')?.addEventListener('click', () => {
        if (!currentProject) return;
        const imgs = currentProject.imgs || [currentProject.img];
        galleryIdx = (galleryIdx - 1 + imgs.length) % imgs.length;
        updateGalleryImage();
    });
    document.getElementById('proj-gallery-next')?.addEventListener('click', () => {
        if (!currentProject) return;
        const imgs = currentProject.imgs || [currentProject.img];
        galleryIdx = (galleryIdx + 1) % imgs.length;
        updateGalleryImage();
    });
    document.getElementById('projects-grid')?.addEventListener('click', e => {
        const card = e.target.closest('.project-card');
        if (card) openModal(parseInt(card.dataset.project));
    });
    document.getElementById('projects-grid')?.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            const card = e.target.closest('.project-card');
            if (card) openModal(parseInt(card.dataset.project));
        }
    });
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

// =====================
// Theme Management
// =====================
const THEMES = ['blue', 'purple', 'green', 'orange', 'rose'];

function applyTheme(theme) {
    THEMES.forEach(t => document.body.classList.remove(`theme-${t}`));
    if (theme !== 'blue') document.body.classList.add(`theme-${theme}`);
    document.querySelectorAll('.theme-dot').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
}

function initTheme() {
    const saved = localStorage.getItem('theme') || 'blue';
    applyTheme(saved);
    document.querySelectorAll('.theme-dot').forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.dataset.theme;
            applyTheme(theme);
            localStorage.setItem('theme', theme);
        });
    });
}

// =====================
// Dark Mode Management
// =====================
function initDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const savedMode = localStorage.getItem('darkMode');

    // Dark mode is ON by default – only remove it if explicitly disabled
    if (savedMode === 'disabled') {
        document.body.classList.remove('dark-mode');
    } else {
        document.body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
}

// =====================
// Navbar Scroll Effect
// =====================
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    const welcomeSection = document.querySelector('.welcome-section');

    window.addEventListener('scroll', function() {
        const threshold = welcomeSection ? welcomeSection.offsetHeight - 5 : 40;
        navbar.classList.toggle('scrolled', window.scrollY > threshold);
    }, { passive: true });
}

// =====================
// Intro / Onboarding
// =====================
function initIntroAnimation() {
    initOnboarding();
}

function initOnboarding() {
    const onboardLang  = document.getElementById('onboard-lang');
    const onboardTheme = document.getElementById('onboard-theme');

    // If already completed onboarding on this device — skip straight to intro
    if (localStorage.getItem('onboardingComplete')) {
        const savedLang  = localStorage.getItem('language') || 'he';
        const savedTheme = localStorage.getItem('theme')    || 'blue';
        setLanguage(savedLang);
        applyTheme(savedTheme);
        onboardLang.style.display  = 'none';
        onboardTheme.style.display = 'none';
        startIntroSequence();
        return;
    }

    // Language tile clicked
    document.querySelectorAll('.onboard-lang-tile').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
            onboardLang.classList.add('onboard-exit');
            setTimeout(() => {
                onboardLang.style.display = 'none';
                onboardTheme.classList.add('active');
            }, 350);
        });
    });

    // Theme tile clicked — listen on the whole item (button + label)
    document.querySelectorAll('.onboard-theme-item').forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            const theme = item.querySelector('.onboard-theme-tile').dataset.theme;
            applyTheme(theme);
            localStorage.setItem('theme', theme);
            localStorage.setItem('onboardingComplete', '1');
            onboardTheme.classList.add('onboard-exit');
            setTimeout(() => {
                onboardTheme.style.display = 'none';
                startIntroSequence();
            }, 350);
        });
    });
}

function startIntroSequence() {
    const introScreen = document.getElementById('intro-screen');
    const mainContent  = document.getElementById('main-content');
    const loader       = document.getElementById('intro-loader');
    const helloStep    = document.getElementById('intro-hello');
    const nameStep     = document.getElementById('intro-name');
    const waveStep     = document.getElementById('intro-wave');

    loader.classList.add('active');
    setTimeout(() => { loader.classList.remove('active'); }, 1500);
    setTimeout(() => { helloStep.classList.add('active'); }, 1700);
    setTimeout(() => { helloStep.classList.remove('active'); }, 3200);
    setTimeout(() => { nameStep.classList.add('active'); }, 3400);
    setTimeout(() => { nameStep.classList.remove('active'); }, 5000);
    setTimeout(() => { waveStep.classList.add('active'); }, 5200);
    setTimeout(() => {
        introScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
    }, 6800);
}

// =====================
// Navigation and Lock System
// =====================
function initNavigation() {
    // Locked section click handler
    document.querySelectorAll('.nav-item.locked').forEach(item => {
        const link = item.querySelector('.nav-link');
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = item.dataset.section;
            if (!gameState.unlockedSections.includes(section)) {
                openInlineGame(section);
            } else {
                document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Scroll spy — highlight active nav link based on visible section
    const sectionIds = ['home', 'about', 'projects', 'portfolio', 'blog', 'contact'];
    const navLinks = {};
    sectionIds.forEach(id => {
        const link = document.querySelector(`.nav-link[href="#${id}"]`);
        if (link) navLinks[id] = link;
    });

    function setActiveLink(id) {
        Object.values(navLinks).forEach(l => l.classList.remove('active'));
        if (navLinks[id]) navLinks[id].classList.add('active');
    }

    const visible = new Set();

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) visible.add(entry.target.id);
            else visible.delete(entry.target.id);
        });
        // Pick the first visible section in DOM order
        const current = sectionIds.find(id => visible.has(id));
        if (current) setActiveLink(current);
    }, { threshold: 0.25 });

    sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });
}

function loadUnlockedSections() {
    gameState.unlockedSections.forEach(section => {
        unlockSection(section);
    });
}

function saveProgress() {
    localStorage.setItem('unlockedSections', JSON.stringify(gameState.unlockedSections));
}

function unlockSection(section) {
    const navItem = document.querySelector(`.nav-item[data-section="${section}"]`);
    if (navItem) {
        navItem.classList.remove('locked');
        navItem.classList.add('unlocked');
    }

    const contentSection = document.getElementById(section);
    if (contentSection) {
        contentSection.classList.remove('locked-section');
        contentSection.classList.add('unlocked');
        const overlay = contentSection.querySelector('.locked-overlay');
        if (overlay) overlay.style.display = 'none';
    }

    if (!gameState.unlockedSections.includes(section)) {
        gameState.unlockedSections.push(section);
        saveProgress();
    }
}

// =====================
// Inline Game Management
// =====================
function openInlineGame(section) {
    gameState.currentSection = section;

    const sectionEl = document.getElementById(section);
    sectionEl.scrollIntoView({ behavior: 'smooth' });
}

function startChallenge(section) {
    gameState.currentSection = section;

    const lockMsg = document.getElementById(`lock-msg-${section}`);
    const gameContainer = document.getElementById(`game-${section}`);

    if (lockMsg) lockMsg.style.display = 'none';
    if (gameContainer) {
        gameContainer.style.display = 'block';
        const gameType = gameState.games[section];
        loadGame(gameType, gameContainer);
    }
}

function unlockAndReveal() {
    const section = gameState.currentSection;
    if (section) {
        unlockSection(section);
        gameState.currentSection = null;
        setTimeout(() => {
            document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }
}

document.getElementById('game-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeGameModal();
    }
});

// =====================
// Load Game
// =====================
function loadGame(gameType, container) {
    container.innerHTML = '';

    switch(gameType) {
        case 'rock-paper-scissors':
            loadRockPaperScissors(container);
            break;
        case 'memory':
            loadMemoryGame(container);
            break;
        case 'quiz':
            loadQuizGame(container);
            break;
        case 'typing':
            loadTypingGame(container);
            break;
        case 'math':
            loadMathGame(container);
            break;
        case 'dag-maluach':
            loadDagMaluach(container);
            break;
        case 'archery':
            loadArcheryGame(container);
            break;
        case 'sprint-race':
            loadSprintRace(container);
            break;
    }
}

// =====================
// Rock Paper Scissors Game
// =====================
function loadRockPaperScissors(container) {
    container.innerHTML = '';

    const choices = ['rock', 'paper', 'scissors'];
    const emojis = { rock: '🪨', paper: '📄', scissors: '✂️' };
    const emojiKeys = { rock: 'rps_rock', paper: 'rps_paper', scissors: 'rps_scissors' };
    const isRTL = document.documentElement.dir === 'rtl';

    let playerScore = 0;
    let computerScore = 0;
    let busy = false;

    const wrapper = document.createElement('div');
    wrapper.className = 'rps-wrapper';
    wrapper.innerHTML = `
        <h2 class="rps-title">${t('rps_title')}</h2>
        <div class="rps-scoreboard">
            <div class="rps-score-side">
                <span class="rps-score-name">${t('rps_you')}</span>
                <span class="rps-score-num" id="rps-player-score">0</span>
            </div>
            <div class="rps-score-sep">VS</div>
            <div class="rps-score-side">
                <span class="rps-score-num" id="rps-computer-score">0</span>
                <span class="rps-score-name">${t('rps_computer')}</span>
            </div>
        </div>
        <div class="rps-arena">
            <div class="rps-panel rps-player-panel">
                <div class="rps-panel-label">${t('rps_you')}</div>
                <div class="rps-choice-list">
                    ${choices.map(c => `
                        <button class="rps-btn" data-choice="${c}">
                            <span class="rps-emoji">${emojis[c]}</span>
                            <span class="rps-lbl">${t(emojiKeys[c])}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
            <div class="rps-battle-zone">
                <div class="rps-fighter" id="rps-fighter-player"></div>
                <div class="rps-clash-text" id="rps-clash-text">VS</div>
                <div class="rps-fighter" id="rps-fighter-computer"></div>
            </div>
            <div class="rps-panel rps-computer-panel">
                <div class="rps-panel-label">${t('rps_computer')}</div>
                <div class="rps-choice-list rps-choice-display">
                    ${choices.map(c => `
                        <div class="rps-display-item">
                            <span class="rps-emoji">${emojis[c]}</span>
                            <span class="rps-lbl">${t(emojiKeys[c])}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        <div class="rps-status" id="rps-status">${t('rps_choose')}</div>
        <div class="rps-hint">${t('rps_first_to')}</div>
    `;

    container.appendChild(wrapper);

    const buttons = wrapper.querySelectorAll('.rps-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (busy) return;
            busy = true;
            buttons.forEach(b => b.disabled = true);

            const playerChoice = this.dataset.choice;
            const computerChoice = choices[Math.floor(Math.random() * 3)];
            const result = determineWinner(playerChoice, computerChoice);

            const playerFighter = wrapper.querySelector('#rps-fighter-player');
            const computerFighter = wrapper.querySelector('#rps-fighter-computer');
            const clashText = wrapper.querySelector('#rps-clash-text');
            const status = wrapper.querySelector('#rps-status');

            // Reset
            playerFighter.className = 'rps-fighter';
            computerFighter.className = 'rps-fighter';
            playerFighter.textContent = emojis[playerChoice];
            computerFighter.textContent = '';
            clashText.textContent = 'VS';
            clashText.className = 'rps-clash-text';
            status.className = 'rps-status';
            status.textContent = t('rps_thinking');

            // Player choice pops in
            setTimeout(() => {
                playerFighter.classList.add(isRTL ? 'rps-slide-from-right' : 'rps-slide-from-left');
            }, 50);

            // Computer reveals after delay
            setTimeout(() => {
                computerFighter.textContent = emojis[computerChoice];
                computerFighter.classList.add(isRTL ? 'rps-slide-from-left' : 'rps-slide-from-right');
            }, 800);

            // Resolve round
            setTimeout(() => {
                clashText.classList.add('rps-clash-anim');

                if (result === 'win') {
                    playerScore++;
                    wrapper.querySelector('#rps-player-score').textContent = playerScore;
                    playerFighter.classList.add(isRTL ? 'rps-advance-left' : 'rps-advance-right');
                    computerFighter.classList.add('rps-fall');
                    clashText.textContent = '💥';
                    status.textContent = t('rps_round_win');
                    status.classList.add('rps-win');
                } else if (result === 'lose') {
                    computerScore++;
                    wrapper.querySelector('#rps-computer-score').textContent = computerScore;
                    computerFighter.classList.add(isRTL ? 'rps-advance-right' : 'rps-advance-left');
                    playerFighter.classList.add('rps-fall');
                    clashText.textContent = '💥';
                    status.textContent = t('rps_round_lose');
                    status.classList.add('rps-lose');
                } else {
                    playerFighter.classList.add('rps-draw');
                    computerFighter.classList.add('rps-draw');
                    clashText.textContent = '🤝';
                    status.textContent = t('rps_round_tie');
                    status.classList.add('rps-tie');
                }

                // Check game end
                setTimeout(() => {
                    if (playerScore >= 2) {
                        showSuccess(container);
                    } else if (computerScore >= 2) {
                        status.textContent = t('rps_gameover');
                        status.className = 'rps-status rps-lose';
                        setTimeout(() => loadRockPaperScissors(container), 2200);
                    } else {
                        // Next round — reset arena
                        setTimeout(() => {
                            playerFighter.className = 'rps-fighter';
                            computerFighter.className = 'rps-fighter';
                            playerFighter.textContent = '';
                            computerFighter.textContent = '';
                            clashText.textContent = 'VS';
                            clashText.className = 'rps-clash-text';
                            status.textContent = t('rps_choose');
                            status.className = 'rps-status';
                            buttons.forEach(b => b.disabled = false);
                            busy = false;
                        }, 400);
                    }
                }, 1600);
            }, 1500);
        });
    });
}

function determineWinner(player, computer) {
    if (player === computer) return 'tie';

    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'win';
    }

    return 'lose';
}

// =====================
// Memory Game
// =====================
function loadMemoryGame(container) {
    const game = document.createElement('div');
    game.className = 'memory-game';
    game.innerHTML = `
        <p style="margin-bottom: 20px; font-size: 1.1rem;">${t('memory_instruction')}</p>
        <div class="memory-grid" id="memory-grid"></div>
        <div id="memory-result"></div>
    `;

    container.appendChild(game);

    const emojis = ['🎮', '🎯', '🎨', '🎭', '🎪', '🎸', '🎺', '🎻'];
    const cards = [...emojis, ...emojis].sort(() => Math.random() - 0.5);

    let flippedCards = [];
    let matchedPairs = 0;

    const grid = document.getElementById('memory-grid');

    cards.forEach((emoji, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.emoji = emoji;
        card.dataset.index = index;
        card.textContent = '';

        card.addEventListener('click', function() {
            if (flippedCards.length >= 2 || this.classList.contains('flipped')) return;

            this.classList.add('flipped');
            this.textContent = emoji;
            flippedCards.push(this);

            if (flippedCards.length === 2) {
                setTimeout(() => {
                    if (flippedCards[0].dataset.emoji === flippedCards[1].dataset.emoji) {
                        matchedPairs++;
                        flippedCards = [];

                        if (matchedPairs === emojis.length) {
                            setTimeout(() => {
                                showSuccess(container);
                                unlockSection(gameState.currentSection);
                            }, 500);
                        }
                    } else {
                        flippedCards.forEach(card => {
                            card.classList.remove('flipped');
                            card.textContent = '';
                        });
                        flippedCards = [];
                    }
                }, 1000);
            }
        });

        grid.appendChild(card);
    });
}

// =====================
// Quiz Game
// =====================
function loadQuizGame(container) {
    const questions = t('quiz_questions');

    let currentQuestion = 0;
    let correctAnswers = 0;

    function displayQuestion() {
        const q = questions[currentQuestion];
        const game = document.createElement('div');
        game.className = 'quiz-game';
        game.innerHTML = `
            <p style="margin-bottom: 20px;">${t('quiz_question_label')} ${currentQuestion + 1} ${t('quiz_of')} ${questions.length}</p>
            <div class="quiz-question">${q.question}</div>
            <div class="quiz-options">
                ${q.options.map((option, index) => `
                    <button class="quiz-option" data-index="${index}">${option}</button>
                `).join('')}
            </div>
        `;

        container.innerHTML = '';
        container.appendChild(game);

        document.querySelectorAll('.quiz-option').forEach(button => {
            button.addEventListener('click', function() {
                const selected = parseInt(this.dataset.index);

                if (selected === q.correct) {
                    this.classList.add('correct');
                    correctAnswers++;
                } else {
                    this.classList.add('wrong');
                    document.querySelector(`[data-index="${q.correct}"]`).classList.add('correct');
                }

                document.querySelectorAll('.quiz-option').forEach(btn => btn.disabled = true);

                setTimeout(() => {
                    currentQuestion++;
                    if (currentQuestion < questions.length) {
                        displayQuestion();
                    } else {
                        if (correctAnswers >= 2) {
                            showSuccess(container);
                            unlockSection(gameState.currentSection);
                        } else {
                            container.innerHTML = `
                                <div style="text-align: center; padding: 40px;">
                                    <h3 style="color: #EF4444; margin-bottom: 15px;">${t('quiz_fail_msg')}</h3>
                                    <p>${t('quiz_fail_hint')}</p>
                                    <button class="game-start-btn" onclick="location.reload()">${t('try_again')}</button>
                                </div>
                            `;
                        }
                    }
                }, 1500);
            });
        });
    }

    displayQuestion();
}

// =====================
// Typing Game
// =====================
function loadTypingGame(container) {
    const sentences = [
        'The quick brown fox jumps over the lazy dog',
        'JavaScript is an amazing programming language',
        'Web development is fun and creative',
        'Practice makes perfect in coding'
    ];

    const sentence = sentences[Math.floor(Math.random() * sentences.length)];

    const game = document.createElement('div');
    game.className = 'typing-game';
    game.innerHTML = `
        <p style="margin-bottom: 20px; font-size: 1.1rem;">${t('typing_instruction')}</p>
        <div class="typing-text">${sentence}</div>
        <input type="text" class="typing-input" id="typing-input" placeholder="Start typing..." dir="ltr">
        <div class="typing-timer">${t('time_left')} <span id="timer">30</span>s</div>
    `;

    container.appendChild(game);

    let timeLeft = 30;
    const input = document.getElementById('typing-input');
    const timerDisplay = document.getElementById('timer');

    input.focus();

    const countdown = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            input.disabled = true;
            container.innerHTML = `
                <div style="text-align: center; padding: 40px;">
                    <h3 style="color: #EF4444; margin-bottom: 15px;">${t('times_up')}</h3>
                    <p>${t('typing_fail')}</p>
                    <button class="game-start-btn" onclick="location.reload()">${t('try_again')}</button>
                </div>
            `;
        }
    }, 1000);

    input.addEventListener('input', function() {
        if (this.value === sentence) {
            clearInterval(countdown);
            this.disabled = true;
            showSuccess(container);
            unlockSection(gameState.currentSection);
        }
    });
}

// =====================
// Math Game
// =====================
function loadMathGame(container) {
    const game = document.createElement('div');
    game.className = 'math-game';

    let questionsAnswered = 0;
    const questionsNeeded = 3;

    function generateQuestion() {
        const num1 = Math.floor(Math.random() * 20) + 1;
        const num2 = Math.floor(Math.random() * 20) + 1;
        const operations = ['+', '-', '*'];
        const operation = operations[Math.floor(Math.random() * operations.length)];

        let answer;
        switch(operation) {
            case '+': answer = num1 + num2; break;
            case '-': answer = num1 - num2; break;
            case '*': answer = num1 * num2; break;
        }

        game.innerHTML = `
            <p style="margin-bottom: 20px; font-size: 1.1rem;">${t('math_instruction').replace('{n}', questionsNeeded)}</p>
            <p style="margin-bottom: 20px;">${t('math_progress')}: ${questionsAnswered}/${questionsNeeded}</p>
            <div class="math-question">${num1} ${operation} ${num2} = ?</div>
            <input type="number" class="math-input" id="math-input" placeholder="${t('math_placeholder')}">
            <br>
            <button class="math-submit" id="math-submit">${t('math_submit')}</button>
            <div id="math-result" style="margin-top: 20px; font-size: 1.2rem;"></div>
        `;

        container.innerHTML = '';
        container.appendChild(game);

        const input = document.getElementById('math-input');
        const submitBtn = document.getElementById('math-submit');
        const resultDiv = document.getElementById('math-result');

        input.focus();

        function checkAnswer() {
            const userAnswer = parseInt(input.value);

            if (userAnswer === answer) {
                questionsAnswered++;
                resultDiv.style.color = '#10B981';
                resultDiv.textContent = t('math_correct');

                if (questionsAnswered >= questionsNeeded) {
                    setTimeout(() => {
                        showSuccess(container);
                        unlockSection(gameState.currentSection);
                    }, 1000);
                } else {
                    setTimeout(() => {
                        generateQuestion();
                    }, 1000);
                }
            } else {
                resultDiv.style.color = '#EF4444';
                resultDiv.textContent = t('math_wrong');
                input.value = '';
                input.focus();
            }
        }

        submitBtn.addEventListener('click', checkAnswer);
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkAnswer();
            }
        });
    }

    generateQuestion();
}

// =====================
// Dag Maluach (Red Light, Green Light)
// =====================
let _dagCleanup = null;
let _sprintCleanup = null;

function loadDagMaluach(container) {
    if (_dagCleanup) { _dagCleanup(); _dagCleanup = null; }
    container.innerHTML = '';

    const START_POS  = 5;   // % from left where players begin
    const FINISH_POS = 80;  // % where the wall / doll is
    const PLAYER_SPEED = 14; // % per second (20 × 0.7)

    const npcData = [
        { pos: START_POS, speed: 11, emoji: '🏃‍♀️', bottom: 55, size: '1.4rem'  },
        { pos: START_POS, speed: 15, emoji: '🏃‍♂️', bottom: 30, size: '1.75rem' },
        { pos: START_POS, speed: 9,  emoji: '🏃',   bottom: 8,  size: '2rem'    },
    ];

    let phase           = 'green';
    let playerPos       = START_POS;
    let holding         = false;
    let playerElim      = false;
    let playerWon       = false;
    let gameActive      = true;
    let lastTs          = null;
    let rafId           = null;
    let phaseTimeout    = null;

    const wrapper = document.createElement('div');
    wrapper.className = 'dag-wrapper';
    wrapper.innerHTML = `
        <h2 class="dag-title">${t('dag_title')}</h2>
        <div class="dag-track" id="dag-track">
            <div class="dag-wall"></div>
            <div class="dag-start-line"></div>
            <div class="dag-doll away" id="dag-doll">💃</div>
            ${npcData.map((n, i) => `
                <div class="dag-char dag-npc" id="dag-npc-${i}"
                    style="bottom:${n.bottom}px;left:${n.pos}%;font-size:${n.size}">
                    ${n.emoji}
                </div>
            `).join('')}
            <div class="dag-char dag-player" id="dag-player"
                style="bottom:8px;left:${START_POS}%;font-size:2.2rem">🧍</div>
        </div>
        <div class="dag-hud">
            <div class="dag-light green" id="dag-light"></div>
            <div class="dag-status" id="dag-status">${t('dag_green')}</div>
        </div>
        <button class="dag-hold-btn" id="dag-hold-btn">${t('dag_hold')}</button>
        <div class="dag-hint">${t('dag_hint')}</div>
    `;
    container.appendChild(wrapper);

    const playerEl = wrapper.querySelector('#dag-player');
    const dollEl   = wrapper.querySelector('#dag-doll');
    const lightEl  = wrapper.querySelector('#dag-light');
    const statusEl = wrapper.querySelector('#dag-status');
    const holdBtn  = wrapper.querySelector('#dag-hold-btn');
    const npcEls   = npcData.map((_, i) => wrapper.querySelector(`#dag-npc-${i}`));

    // ---- Phase management ----
    function setPhase(p) {
        phase = p;
        clearTimeout(phaseTimeout);
        if (p === 'green') {
            lightEl.className  = 'dag-light green';
            statusEl.textContent = t('dag_green');
            dollEl.className   = 'dag-doll away';
            phaseTimeout = setTimeout(() => setPhase('turning'), 2500 + Math.random() * 2500);
        } else if (p === 'turning') {
            lightEl.className  = 'dag-light turning';
            statusEl.textContent = t('dag_turning');
            dollEl.className   = 'dag-doll turning';
            phaseTimeout = setTimeout(() => setPhase('red'), 500 + Math.random() * 400);
        } else if (p === 'red') {
            lightEl.className  = 'dag-light red';
            statusEl.textContent = t('dag_red');
            dollEl.className   = 'dag-doll watching';
            if (holding && !playerElim && !playerWon) { eliminatePlayer(); return; }
            phaseTimeout = setTimeout(() => setPhase('green'), 1800 + Math.random() * 2000);
        }
    }

    // ---- Eliminate ----
    function eliminatePlayer() {
        if (playerElim || playerWon) return;
        playerElim  = true;
        holding     = false;
        gameActive  = false;
        clearTimeout(phaseTimeout);
        cancelAnimationFrame(rafId);
        ac.abort();
        playerEl.textContent = '💀';
        playerEl.classList.add('dag-eliminated');
        lightEl.className    = 'dag-light red';
        statusEl.textContent = t('dag_eliminated');
        holdBtn.disabled     = true;
        setTimeout(() => {
            statusEl.innerHTML = `${t('dag_eliminated')} <button class="dag-restart-btn" id="dag-restart">${t('dag_try_again')} →</button>`;
            wrapper.querySelector('#dag-restart').addEventListener('click', () => loadDagMaluach(container));
        }, 1200);
    }

    // ---- Win ----
    function winGame() {
        if (playerWon || playerElim) return;
        playerWon   = true;
        holding     = false;
        gameActive  = false;
        clearTimeout(phaseTimeout);
        cancelAnimationFrame(rafId);
        ac.abort();
        playerEl.textContent = '🎊';
        lightEl.className    = 'dag-light green';
        statusEl.textContent = t('dag_win');
        holdBtn.disabled     = true;
        dollEl.className     = 'dag-doll';
        setTimeout(() => showSuccess(container), 900);
    }

    // ---- Game loop ----
    function loop(ts) {
        if (!gameActive) return;
        const dt = lastTs ? (ts - lastTs) / 1000 : 0;
        lastTs = ts;

        if (holding && (phase === 'green' || phase === 'turning') && !playerElim) {
            playerPos = Math.min(FINISH_POS, playerPos + PLAYER_SPEED * dt);
            playerEl.style.left = playerPos + '%';
            if (playerPos >= FINISH_POS) { winGame(); return; }
        }

        npcData.forEach((npc, i) => {
            if (phase === 'green') {
                npc.pos = Math.min(FINISH_POS - 8, npc.pos + npc.speed * dt);
                npcEls[i].style.left = npc.pos + '%';
                npcEls[i].classList.add('dag-running');
            } else {
                npcEls[i].classList.remove('dag-running');
            }
        });

        rafId = requestAnimationFrame(loop);
    }

    // ---- Controls ----
    function startHold(e) {
        e.preventDefault();
        if (!gameActive || playerElim || playerWon) return;
        if (phase === 'red') { eliminatePlayer(); return; }
        holding = true;
        holdBtn.classList.add('dag-btn-active');
        if (!playerElim && !playerWon) {
            playerEl.textContent = '🏃';
            playerEl.classList.add('dag-running');
        }
    }

    function endHold(e) {
        if (e && e.preventDefault) e.preventDefault();
        holding = false;
        holdBtn.classList.remove('dag-btn-active');
        playerEl.classList.remove('dag-running');
        if (!playerElim && !playerWon && gameActive) playerEl.textContent = '🧍';
    }

    const keysHeld = new Set();
    function onKeyDown(e) {
        if (e.code === 'ArrowRight' || e.code === 'Space') {
            e.preventDefault();
            if (!keysHeld.has(e.code)) { keysHeld.add(e.code); startHold(e); }
        }
    }
    function onKeyUp(e) {
        if (e.code === 'ArrowRight' || e.code === 'Space') {
            keysHeld.delete(e.code); endHold(e);
        }
    }

    const ac  = new AbortController();
    const sig = { signal: ac.signal };

    wrapper.querySelector('#dag-track').addEventListener('mousedown', startHold);
    wrapper.querySelector('#dag-track').addEventListener('touchstart', startHold, { passive: false });
    holdBtn.addEventListener('mousedown', startHold);
    holdBtn.addEventListener('touchstart', startHold, { passive: false });

    document.addEventListener('mouseup',  endHold,   sig);
    document.addEventListener('touchend', endHold,   sig);
    document.addEventListener('keydown',  onKeyDown, sig);
    document.addEventListener('keyup',    onKeyUp,   sig);

    // Start
    setPhase('green');
    rafId = requestAnimationFrame(loop);

    _dagCleanup = function() {
        ac.abort();
        clearTimeout(phaseTimeout);
        cancelAnimationFrame(rafId);
    };
}

// =====================
// Archery Game
// =====================
function loadArcheryGame(container) {
    container.innerHTML = '';

    const W = 520, H = 280;
    const ARCHER_X = 65, ARCHER_Y = 195;
    const TARGET_X = 440, TARGET_Y = 165;
    const GROUND_Y = 238;
    const GRAVITY = 300;
    const MAX_POWER = 660;
    const MAX_CHARGE_MS = 2500;
    const TRX = 0.36; // target horizontal compression — gives perspective angle

    const rings = [
        { r: 62, color: '#111827', pts: 1 },
        { r: 46, color: '#1d4ed8', pts: 3 },
        { r: 30, color: '#facc15', pts: 5 },
        { r: 15, color: '#ef4444', pts: 10, win: true }
    ];

    let angle = 0.42;
    let charging = false, chargeStart = 0, power = 0;
    let ax = 0, ay = 0, avx = 0, avy = 0, arrowFlying = false;
    let arrowsLeft = 8, hits = 0, score = 0, gameOver = false;
    let flashMsg = '', flashTimer = 0;
    let prevTs = null, rafId = null;

    const wrapper = document.createElement('div');
    wrapper.className = 'arch-wrapper';
    wrapper.innerHTML = `
        <h2 class="arch-title">${t('archery_title')}</h2>
        <div class="arch-arena">
            <canvas id="arch-canvas" width="${W}" height="${H}"></canvas>
            <div class="arch-power-wrap">
                <div class="arch-power-track">
                    <div class="arch-power-fill" id="arch-pf"></div>
                </div>
                <span class="arch-power-icon">💪</span>
            </div>
        </div>
        <div class="arch-hud">
            <span>🏹 <b id="arch-a">${arrowsLeft}</b></span>
            <span>🎯 <b id="arch-h">${hits}</b>/3</span>
            <span>⭐ <b id="arch-s">${score}</b></span>
        </div>
        <div class="arch-status" id="arch-st">${t('archery_aim')}</div>
        <div class="arch-hint">${t('archery_hint')}</div>
    `;
    container.appendChild(wrapper);

    const canvas = wrapper.querySelector('#arch-canvas');
    const ctx    = canvas.getContext('2d');
    const pf     = wrapper.querySelector('#arch-pf');
    const stEl   = wrapper.querySelector('#arch-st');

    function getAngle(cx, cy) {
        const r  = canvas.getBoundingClientRect();
        const mx = (cx - r.left) * (W / r.width);
        const my = (cy - r.top)  * (H / r.height);
        return Math.max(-0.35, Math.min(1.25, Math.atan2(-(my - ARCHER_Y), mx - ARCHER_X)));
    }

    // ---- Draw background ----
    function drawBg() {
        const sky = ctx.createLinearGradient(0, 0, 0, GROUND_Y);
        sky.addColorStop(0, '#38bdf8');
        sky.addColorStop(1, '#bae6fd');
        ctx.fillStyle = sky;
        ctx.fillRect(0, 0, W, GROUND_Y);
        ctx.fillStyle = '#86efac';
        ctx.fillRect(0, GROUND_Y, W, H - GROUND_Y);
        ctx.fillStyle = '#4ade80';
        ctx.fillRect(0, GROUND_Y, W, 4);
        // Clouds
        [[75, 32, 26], [160, 48, 20], [300, 25, 22], [390, 42, 18]].forEach(([cx, cy, cr]) => {
            ctx.beginPath();
            ctx.arc(cx, cy, cr, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255,255,255,0.68)';
            ctx.fill();
            ctx.beginPath();
            ctx.arc(cx + 18, cy + 6, cr * 0.75, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    // ---- Draw target ----
    function drawTarget() {
        // Pole
        ctx.strokeStyle = '#78350f';
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(TARGET_X, TARGET_Y + rings[0].r + 2);
        ctx.lineTo(TARGET_X, GROUND_Y);
        ctx.stroke();

        // 3-D depth — dark "side" slab shifted slightly RIGHT (away from archer)
        const depthShift = 7;
        for (const ring of rings) {
            ctx.beginPath();
            ctx.ellipse(TARGET_X + depthShift, TARGET_Y,
                ring.r * TRX + depthShift * 0.6, ring.r, 0, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0,0,0,0.45)';
            ctx.fill();
        }

        // Front face — rings as perspective ellipses (rx compressed)
        for (const ring of rings) {
            ctx.beginPath();
            ctx.ellipse(TARGET_X, TARGET_Y, ring.r * TRX, ring.r, 0, 0, Math.PI * 2);
            ctx.fillStyle = ring.color;
            ctx.fill();
            ctx.strokeStyle = 'rgba(255,255,255,0.2)';
            ctx.lineWidth = 1;
            ctx.stroke();
        }

        // Right-edge highlight (light catching the rim on the far side)
        ctx.beginPath();
        ctx.ellipse(TARGET_X, TARGET_Y, rings[0].r * TRX, rings[0].r, 0,
            -Math.PI * 0.5, Math.PI * 0.5);
        ctx.strokeStyle = 'rgba(255,255,255,0.15)';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Center dot
        ctx.beginPath();
        ctx.ellipse(TARGET_X, TARGET_Y, 3 * TRX, 3, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        ctx.fill();
    }

    // ---- Draw archer ----
    function drawArcher() {
        ctx.save();
        ctx.translate(ARCHER_X, ARCHER_Y);

        // Shadow
        ctx.beginPath();
        ctx.ellipse(2, 42, 14, 5, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0,0,0,0.18)';
        ctx.fill();

        // Legs
        ctx.strokeStyle = '#374151'; ctx.lineWidth = 3.5; ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(0, 12); ctx.lineTo(-10, 40);
        ctx.moveTo(0, 12); ctx.lineTo(10, 40);
        ctx.stroke();

        // Body
        ctx.strokeStyle = '#1e3a5f'; ctx.lineWidth = 5;
        ctx.beginPath(); ctx.moveTo(0, -22); ctx.lineTo(0, 12); ctx.stroke();

        // Back arm
        ctx.strokeStyle = '#6b7280'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(0, -8); ctx.lineTo(-14, 3); ctx.stroke();

        // ---- Bow arm group (rotates with angle) ----
        ctx.rotate(-angle);

        // Arm
        ctx.strokeStyle = '#6b7280'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(0, -8); ctx.lineTo(24, -8); ctx.stroke();

        // Bow arc
        const bowCx = 24, bowCy = -8, bowR = 22;
        ctx.strokeStyle = '#92400e'; ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(bowCx, bowCy, bowR, -Math.PI * 0.65, Math.PI * 0.65);
        ctx.stroke();

        // String with pull-back
        const pull = charging ? 11 * power : 0;
        const tx1 = bowCx + bowR * Math.cos(-Math.PI * 0.65);
        const ty1 = bowCy + bowR * Math.sin(-Math.PI * 0.65);
        const tx2 = bowCx + bowR * Math.cos(Math.PI * 0.65);
        const ty2 = bowCy + bowR * Math.sin(Math.PI * 0.65);
        ctx.strokeStyle = '#d1d5db'; ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(tx1, ty1);
        ctx.quadraticCurveTo(bowCx - pull, bowCy, tx2, ty2);
        ctx.stroke();

        // Arrow on bow (not flying)
        if (!arrowFlying) {
            const tip  = bowCx + bowR + 10;
            const tail = bowCx + bowR - pull - 20;
            ctx.strokeStyle = '#7c3aed'; ctx.lineWidth = 2.5; ctx.lineCap = 'round';
            ctx.beginPath(); ctx.moveTo(tail, bowCy); ctx.lineTo(tip, bowCy); ctx.stroke();
            ctx.fillStyle = '#475569';
            ctx.beginPath();
            ctx.moveTo(tip + 6, bowCy); ctx.lineTo(tip + 1, bowCy - 4); ctx.lineTo(tip + 1, bowCy + 4);
            ctx.closePath(); ctx.fill();
            [[-7], [7]].forEach(([dy]) => {
                ctx.fillStyle = '#ef4444';
                ctx.beginPath();
                ctx.moveTo(tail, bowCy); ctx.lineTo(tail - 6, bowCy + dy); ctx.lineTo(tail + 5, bowCy);
                ctx.closePath(); ctx.fill();
            });
        }
        ctx.restore();

        // Head (on top)
        ctx.save();
        ctx.translate(ARCHER_X, ARCHER_Y);
        ctx.beginPath(); ctx.arc(0, -34, 12, 0, Math.PI * 2);
        ctx.fillStyle = '#fde68a'; ctx.fill();
        ctx.strokeStyle = '#b45309'; ctx.lineWidth = 2; ctx.stroke();
        ctx.fillStyle = '#92400e';
        ctx.beginPath(); ctx.arc(0, -39, 9, Math.PI, 0); ctx.fill();
        ctx.restore();
    }

    // ---- Draw flying arrow ----
    function drawFlyingArrow() {
        if (!arrowFlying) return;
        ctx.save();
        ctx.translate(ax, ay);
        ctx.rotate(Math.atan2(avy, avx));
        ctx.strokeStyle = '#7c3aed'; ctx.lineWidth = 2.5; ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(-18, 0); ctx.lineTo(12, 0); ctx.stroke();
        ctx.fillStyle = '#475569';
        ctx.beginPath();
        ctx.moveTo(18, 0); ctx.lineTo(12, -4); ctx.lineTo(12, 4);
        ctx.closePath(); ctx.fill();
        [[-7], [7]].forEach(([dy]) => {
            ctx.fillStyle = '#ef4444';
            ctx.beginPath();
            ctx.moveTo(-18, 0); ctx.lineTo(-13, dy); ctx.lineTo(-8, 0);
            ctx.closePath(); ctx.fill();
        });
        ctx.restore();
    }

    // ---- Trajectory preview (while charging) ----
    function drawTrajectory() {
        if (!charging || power < 0.07) return;
        const p = power * MAX_POWER;
        const vx = p * Math.cos(angle);
        const vy = -p * Math.sin(angle);
        ctx.save();
        ctx.setLineDash([5, 10]);
        ctx.strokeStyle = 'rgba(255,255,255,0.38)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        let first = true;
        for (let i = 0; i <= 65; i++) {
            const ti = (i / 65) * 1.9;
            const px = ARCHER_X + vx * ti;
            const py = ARCHER_Y + vy * ti + 0.5 * GRAVITY * ti * ti;
            if (px > W + 20 || py > H + 10 || py < -30) break;
            first ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
            first = false;
        }
        ctx.stroke();
        ctx.restore();
    }

    // ---- Hit flash text ----
    function drawFlash() {
        if (!flashMsg || flashTimer <= 0) return;
        ctx.save();
        ctx.globalAlpha = Math.min(1, flashTimer * 2.5);
        ctx.font = 'bold 20px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#000';
        ctx.shadowBlur = 8;
        ctx.fillText(flashMsg, TARGET_X, TARGET_Y - rings[0].r - 16);
        ctx.restore();
    }

    // ---- Shoot ----
    function shoot() {
        if (arrowFlying || gameOver || arrowsLeft <= 0 || power < 0.05) return;
        const p = power * MAX_POWER;
        avx = p * Math.cos(angle);
        avy = -p * Math.sin(angle);
        ax = ARCHER_X + 52 * Math.cos(angle);
        ay = ARCHER_Y - 52 * Math.sin(angle);
        arrowFlying = true;
        charging = false;
        power = 0;
        pf.style.height = '0%';
        stEl.textContent = t('archery_fly');
    }

    // ---- Resolve arrow (hit or miss) ----
    function resolveArrow(hitRing) {
        arrowFlying = false;
        arrowsLeft--;
        wrapper.querySelector('#arch-a').textContent = arrowsLeft;
        if (hitRing) {
            hits++;
            score += hitRing.pts;
            wrapper.querySelector('#arch-h').textContent = hits;
            wrapper.querySelector('#arch-s').textContent = score;
            flashMsg = hitRing.win ? t('archery_bullseye') : `+${hitRing.pts} ${t('archery_hit')}`;
            stEl.textContent = flashMsg;
            if (hitRing.win || hits >= 3) {
                flashTimer = 1.2;
                setTimeout(() => endGame(true), 900);
                return;
            }
        } else {
            flashMsg = t('archery_miss');
            stEl.textContent = flashMsg;
        }
        flashTimer = 0.9;
        if (arrowsLeft <= 0) setTimeout(() => endGame(false), 900);
    }

    function endGame(won) {
        gameOver = true;
        cancelAnimationFrame(rafId);
        if (won) {
            stEl.textContent = t('archery_win');
            setTimeout(() => showSuccess(container), 800);
        } else {
            stEl.innerHTML = `${t('archery_lose')} <button class="arch-restart-btn" id="arch-r">${t('archery_try_again')} →</button>`;
            wrapper.querySelector('#arch-r').addEventListener('click', () => loadArcheryGame(container));
        }
    }

    // ---- Game loop ----
    function loop(ts) {
        if (!prevTs) prevTs = ts;
        const dt = Math.min((ts - prevTs) / 1000, 0.05);
        prevTs = ts;

        if (charging && chargeStart) {
            power = Math.min(1, (ts - chargeStart) / MAX_CHARGE_MS);
            pf.style.height = (power * 100) + '%';
        }

        if (arrowFlying) {
            avy += GRAVITY * dt;
            ax  += avx * dt;
            ay  += avy * dt;
            const dx = ax - TARGET_X, dy = ay - TARGET_Y;
            // elliptical distance: normalise x by TRX so hit zone matches visual
            const ellDist = Math.sqrt((dx / TRX) ** 2 + dy ** 2);
            if (ellDist <= rings[0].r) {
                resolveArrow([...rings].reverse().find(r => ellDist <= r.r) || null);
            } else if (ax > TARGET_X + rings[0].r + 50 || ay > H + 60 || ay < -80) {
                resolveArrow(null);
            }
        }

        if (flashTimer > 0) flashTimer -= dt;

        ctx.clearRect(0, 0, W, H);
        drawBg();
        drawTarget();
        drawTrajectory();
        drawFlyingArrow();
        drawArcher();
        drawFlash();

        if (!gameOver) rafId = requestAnimationFrame(loop);
    }

    // ---- Controls ----
    canvas.addEventListener('mousemove', e => {
        if (arrowFlying || gameOver) return;
        angle = getAngle(e.clientX, e.clientY);
    });
    canvas.addEventListener('mousedown', e => {
        if (arrowFlying || gameOver || arrowsLeft <= 0) return;
        e.preventDefault();
        charging = true; chargeStart = performance.now(); power = 0;
    });
    canvas.addEventListener('mouseup', e => {
        if (!charging) return;
        e.preventDefault();
        charging = false; shoot();
    });
    canvas.addEventListener('touchstart', e => {
        if (arrowFlying || gameOver || arrowsLeft <= 0) return;
        e.preventDefault();
        charging = true; chargeStart = performance.now(); power = 0;
        angle = getAngle(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: false });
    canvas.addEventListener('touchmove', e => {
        if (!charging) return;
        e.preventDefault();
        angle = getAngle(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: false });
    canvas.addEventListener('touchend', e => {
        if (!charging) return;
        e.preventDefault();
        charging = false; shoot();
    });

    rafId = requestAnimationFrame(loop);
}

// =====================
// Sprint Race Game
// =====================
function loadSprintRace(container) {
    if (_sprintCleanup) { _sprintCleanup(); _sprintCleanup = null; }

    const W = 520, H = 280;
    const CX = 260, CY = 125;
    const INNER_RX = 130, INNER_RY = 26;   // very flat oval = perspective angle
    const LANE_W = 9;
    const N = 6;
    const PLAYER = 2;
    const COLORS  = ['#ef4444','#f97316','#eab308','#22c55e','#3b82f6','#a855f7'];
    const NPC_SPD  = [0.082, 0.075, null, 0.068, 0.061, 0.054];
    const MAX_SPD  = 0.10;
    const BOOST    = 0.020;
    const DECAY    = Math.LN2 / 0.75;
    const FAR_Y    = CY - (INNER_RY + LANE_W * N);
    const NEAR_Y   = CY + (INNER_RY + LANE_W * N);

    container.innerHTML = `
      <div class="sprint-wrapper">
        <div class="sprint-title">${t('race_title')}</div>
        <div class="sprint-arena">
          <canvas id="sprint-canvas" width="${W}" height="${H}"></canvas>
        </div>
        <div class="sprint-hud">
          <span id="sprint-pos-label">${t('race_position')}: <strong id="sprint-pos-val">—</strong>/6</span>
          <span id="sprint-hint" class="sprint-hint">${t('race_hint')}</span>
        </div>
        <button class="sprint-tap-btn" id="sprint-tap">${t('race_speed')}</button>
      </div>
    `;

    const canvas   = container.querySelector('#sprint-canvas');
    const ctx      = canvas.getContext('2d');
    const posValEl = container.querySelector('#sprint-pos-val');
    const hintEl   = container.querySelector('#sprint-hint');
    const tapBtn   = container.querySelector('#sprint-tap');

    const runners = Array.from({length: N}, (_, i) => ({
        pos: 0, spd: 0,
        stepPhase: i * (1 / N),        // stagger so they don't all sync
        npcSpd: NPC_SPD[i] || 0,
        lane: i, color: COLORS[i],
        isPlayer: i === PLAYER,
        finished: false, rank: 0,
    }));

    let phase     = 'countdown';
    let countdown = 3;
    let cdTimer   = 0;
    let rankCnt   = 0;
    let prevTs    = null;
    let rafId     = null;

    function laneRx(i) { return INNER_RX + LANE_W * (i + 0.5); }
    function laneRy(i) { return INNER_RY + LANE_W * (i + 0.5); }

    function runnerXY(r) {
        const angle = -r.pos * 2 * Math.PI + Math.PI / 2;
        return {
            x: CX + laneRx(r.lane) * Math.cos(angle),
            y: CY + laneRy(r.lane) * Math.sin(angle),
        };
    }

    // Perspective scale: near (bottom) = 1.0, far (top) = 0.48
    function perspScale(sy) {
        return 0.48 + 0.52 * (sy - FAR_Y) / (NEAR_Y - FAR_Y);
    }

    // Facing direction based on horizontal velocity on oval
    // dx/dpos = rx * cos(pos*2π) * 2π — positive → face right
    function facingRight(pos) {
        return pos < 0.25 || pos > 0.75;
    }

    function playerRank() {
        const pp = runners[PLAYER].pos;
        return runners.filter(r => !r.isPlayer && r.pos > pp).length + 1;
    }

    function boost() {
        if (phase !== 'race' || runners[PLAYER].finished) return;
        runners[PLAYER].spd = Math.min(runners[PLAYER].spd + BOOST, MAX_SPD);
    }

    // ─── Stick-figure runner ───────────────────────────────────────────────
    function drawRunner(cx, cy, color, isPlayer, ph, sc, fRight) {
        ctx.save();
        ctx.translate(cx, cy);
        if (!fRight) ctx.scale(-1, 1);

        const p = Math.sin(ph * Math.PI * 2);   // -1..1 oscillation

        ctx.strokeStyle = color;
        ctx.fillStyle   = color;
        ctx.lineWidth   = sc * (isPlayer ? 2.3 : 1.8);
        ctx.lineCap     = 'round';
        ctx.lineJoin    = 'round';

        // shadow
        ctx.save();
        ctx.fillStyle = 'rgba(0,0,0,0.22)';
        ctx.beginPath();
        ctx.ellipse(0, 12 * sc, 5 * sc, 2 * sc, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // right leg: knee swings forward when p > 0
        const rKx = p * 4.5 * sc,  rKy = 6 * sc;
        const rFx = rKx + (p > 0 ? -2 : 1.5) * sc, rFy = 12 * sc;
        ctx.beginPath();
        ctx.moveTo(0.5 * sc, 0); ctx.lineTo(rKx, rKy); ctx.lineTo(rFx, rFy);
        ctx.stroke();

        // left leg: opposite phase
        const lKx = -p * 4.5 * sc, lKy = 6 * sc;
        const lFx = lKx + (p < 0 ? -2 : 1.5) * sc, lFy = 12 * sc;
        ctx.beginPath();
        ctx.moveTo(-0.5 * sc, 0); ctx.lineTo(lKx, lKy); ctx.lineTo(lFx, lFy);
        ctx.stroke();

        // torso (hip → shoulder)
        ctx.beginPath();
        ctx.moveTo(0, 0); ctx.lineTo(0, -8 * sc);
        ctx.stroke();

        // right arm (opposite to right leg)
        ctx.beginPath();
        ctx.moveTo(0, -5 * sc); ctx.lineTo(-p * 4 * sc, -2 * sc);
        ctx.stroke();

        // left arm
        ctx.beginPath();
        ctx.moveTo(0, -5 * sc); ctx.lineTo(p * 4 * sc, -2 * sc);
        ctx.stroke();

        // head
        ctx.beginPath();
        ctx.arc(0, -11 * sc, 3 * sc, 0, Math.PI * 2);
        ctx.fill();

        // player: white ring around head
        if (isPlayer) {
            ctx.strokeStyle = '#fff';
            ctx.lineWidth   = 1.3 * sc;
            ctx.beginPath();
            ctx.arc(0, -11 * sc, 4.5 * sc, 0, Math.PI * 2);
            ctx.stroke();
        }
        ctx.restore();
    }

    // ─── Track ────────────────────────────────────────────────────────────
    function drawTrack() {
        ctx.clearRect(0, 0, W, H);

        const outerRX = INNER_RX + LANE_W * N;
        const outerRY = INNER_RY + LANE_W * N;

        // Track surface with perspective gradient (far=darker, near=lighter)
        const grad = ctx.createLinearGradient(CX, CY - outerRY, CX, CY + outerRY);
        grad.addColorStop(0, '#4a2509');
        grad.addColorStop(1, '#8c4a14');
        ctx.beginPath();
        ctx.ellipse(CX, CY, outerRX + 4, outerRY + 4, 0, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Inner grass
        ctx.beginPath();
        ctx.ellipse(CX, CY, INNER_RX, INNER_RY, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#14532d';
        ctx.fill();

        // Lane dividers
        for (let i = 0; i <= N; i++) {
            ctx.beginPath();
            ctx.ellipse(CX, CY, INNER_RX + LANE_W * i, INNER_RY + LANE_W * i, 0, 0, Math.PI * 2);
            ctx.strokeStyle = (i === 0 || i === N) ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.18)';
            ctx.lineWidth   = (i === 0 || i === N) ? 1.5 : 0.7;
            ctx.stroke();
        }

        // Finish line: checkerboard at bottom (angle = π/2)
        const fa = Math.PI / 2;
        for (let i = 0; i < N; i++) {
            const x1 = CX + (INNER_RX + LANE_W * i)       * Math.cos(fa);
            const y1 = CY + (INNER_RY + LANE_W * i)       * Math.sin(fa);
            const x2 = CX + (INNER_RX + LANE_W * (i + 1)) * Math.cos(fa);
            const y2 = CY + (INNER_RY + LANE_W * (i + 1)) * Math.sin(fa);
            ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
            ctx.strokeStyle = i % 2 === 0 ? '#fff' : '#1e293b';
            ctx.lineWidth = 3;
            ctx.stroke();
        }

        // FINISH label
        ctx.save();
        ctx.font = 'bold 7px sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.65)';
        ctx.textAlign = 'center';
        ctx.fillText('FINISH', CX, CY + outerRY + 14);
        ctx.restore();
    }

    // ─── Runners ─────────────────────────────────────────────────────────
    function drawRunners() {
        // Sort far→near so near runners render on top (painter's algorithm)
        const sorted = [...runners].sort((a, b) => runnerXY(a).y - runnerXY(b).y);

        for (const r of sorted) {
            const {x, y} = runnerXY(r);
            const sc = perspScale(y);
            const fr = facingRight(r.pos);

            // Speed glow for player
            if (r.isPlayer && r.spd > 0.015) {
                ctx.beginPath();
                ctx.arc(x, y, 13 * sc, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(234,179,8,${(r.spd / MAX_SPD) * 0.38})`;
                ctx.fill();
            }

            drawRunner(x, y, r.color, r.isPlayer, r.stepPhase, sc, fr);

            // Rank badge when finished
            if (r.finished && r.rank > 0) {
                ctx.save();
                ctx.font = `bold ${Math.round(9 * sc)}px sans-serif`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.strokeStyle = '#000';
                ctx.lineWidth = 3;
                ctx.strokeText(`#${r.rank}`, x, y - 16 * sc);
                ctx.fillStyle = '#fff';
                ctx.fillText(`#${r.rank}`, x, y - 16 * sc);
                ctx.restore();
            }
        }
    }

    function drawCountdown() {
        ctx.save();
        ctx.font = 'bold 64px sans-serif';
        ctx.fillStyle = countdown === 0 ? '#22c55e' : '#f59e0b';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = '#000';
        ctx.shadowBlur = 18;
        ctx.fillText(countdown > 0 ? countdown : 'GO!', CX, CY);
        ctx.restore();
    }

    function endRace(isWin) {
        phase = 'done';
        tapBtn.disabled = true;
        if (isWin) {
            hintEl.textContent = t('race_win');
            setTimeout(() => showSuccess(container), 900);
        } else {
            hintEl.innerHTML = `${t('race_lose')} <button class="sprint-retry-btn" id="sprint-retry">${t('race_try_again')} →</button>`;
            container.querySelector('#sprint-retry')?.addEventListener('click', () => loadSprintRace(container));
        }
    }

    function loop(ts) {
        if (!canvas.isConnected) return;
        if (prevTs === null) prevTs = ts;
        const dt = Math.min((ts - prevTs) / 1000, 0.05);
        prevTs = ts;

        if (phase === 'countdown') {
            cdTimer += dt;
            if (countdown > 0 && cdTimer >= 0.75) {
                cdTimer = 0; countdown--;
            } else if (countdown === 0 && cdTimer >= 0.5) {
                phase = 'race';
            }
        } else if (phase === 'race') {
            const player = runners[PLAYER];

            // Advance step animation for all active runners
            for (const r of runners) {
                if (r.finished) continue;
                const spd = r.isPlayer ? r.spd : r.npcSpd;
                r.stepPhase = (r.stepPhase + spd * 20 * dt) % 1;
            }

            // Player movement (boost-driven, decaying)
            player.spd = Math.max(0, player.spd * Math.exp(-DECAY * dt));
            player.pos += player.spd * dt;

            // NPCs
            for (const r of runners) {
                if (r.isPlayer || r.finished) continue;
                const variance = 1 + (Math.random() - 0.5) * 0.06;
                r.pos += r.npcSpd * variance * dt;
                if (r.pos >= 1.0) {
                    r.pos = 1.0; r.finished = true; r.rank = ++rankCnt;
                }
            }

            // Player finish check
            if (!player.finished && player.pos >= 1.0) {
                player.pos = 1.0; player.finished = true; player.rank = ++rankCnt;
                endRace(player.rank === 1);
            } else if (!player.finished && runners.filter(r => !r.isPlayer).every(r => r.finished)) {
                player.finished = true; player.rank = ++rankCnt;
                endRace(false);
            }

            posValEl.textContent = playerRank();
        }

        drawTrack();
        drawRunners();
        if (phase === 'countdown') drawCountdown();

        if (phase !== 'done') rafId = requestAnimationFrame(loop);
    }

    const ac  = new AbortController();
    const sig = ac.signal;
    canvas.addEventListener('click', boost, { signal: sig });
    canvas.addEventListener('touchstart', e => { e.preventDefault(); boost(); }, { passive: false, signal: sig });
    tapBtn.addEventListener('click', boost, { signal: sig });
    document.addEventListener('keydown', e => {
        if (e.code === 'Space' || e.code === 'ArrowRight') { e.preventDefault(); boost(); }
    }, { signal: sig });

    _sprintCleanup = () => { ac.abort(); if (rafId) cancelAnimationFrame(rafId); };
    rafId = requestAnimationFrame(loop);
}

// =====================
// Success Message
// =====================
function showSuccess(container) {
    container.innerHTML = `
        <div class="success-message">
            <div class="success-icon">🎉</div>
            <h3>${t('success_title')}</h3>
            <p>${t('success_msg')}</p>
            <button class="game-start-btn" onclick="unlockAndReveal()" style="margin-top: 20px;">${t('continue_btn')}</button>
        </div>
    `;
}

// =====================
// Smooth scroll for navigation
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            const target = document.querySelector(href);
            if (target && !target.classList.contains('locked-section')) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Say Hello button
document.querySelector('.cta-button').addEventListener('click', function() {
    if (gameState.unlockedSections.includes('contact')) {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    } else {
        openGameModal('contact');
    }
});
