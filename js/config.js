const CONFIG = {
    // הגדרות API
    api: {
        url: 'https://script.google.com/macros/s/AKfycbzHInQkdOM09WvSzmITWipaaLv--43e4J2ERf_hxccVea267YlOf--zCt3l0Pj2fW9JIw/exec'
    },

    // הגדרות שעשועון לא עובד מכאן
    quiz: {
        // isAvailable: false,  // האם השעשועון זמין כרגע
        isAvailable: true,  // האם השעשועון זמין כרגע
        nextQuizDate: '2025-05-19',  // תאריך השעשועון הבא
        hebrewDate: "יום שני",  // תאריך עברי
        displayDate: "19.5",  // תאריך לתצוגה
        showAnnouncement: true,  // האם להציג הודעה לפני השעשועון
        // showAnnouncement: false,  // האם להציג הודעה לפני השעשועון
        announcementText: "ברוכים הבאים לשעשועון השבועי בנושא כבוד הורים! \n בתחילת השעשועון יוצגו לכם 4 שאלות בנושא הפעילות, השאלות הינם לרענן את הידע ואינם משפעים על הציון. \n בהצלחה מרובה!",
        // introductionText: "אומר המלווה [נותן ההלואה], ללווה סלע הלויתני עליו ושקל היה שווה, הלווה עונה סלע הלויתני עליו ו3 דינרים היה שווה במקרה הזה היה על הלווה [מקבל ההלואה] להישבע כיון שהודה במקצת מן הטענה, ומחדשת הגמרא שעל המלווה להשבע שמא אם ישבע הלוה - יש לחוש שמא יוציא המלווה את הפיקדון ויפסול את הלווה לעדות ולשבועה, כיון שנשבע שבועת שקר\n\nוהקושיה!!  שהרי רב הונא סובר שגם אם השומר משלם עליו להישבע שאינה ברשותו [וכאן בנידון שלנו המלווה הוא שומר על הפיקדון], והרי לפי רב הונא הוא נשבע שאינה ברשותו וממילא איך יש חשש שמא יוציא את הפקידון, הרי הוא נשבע שאינה ברשותו!!"
        introductionText: "ארבעת השאלות הבאות נועדו לרענן הידע ולא משפיעות על הציון", // הקדמה לשאלות (מוצג בראש השאלה הראשונה)
        // נתיבי קבצי שמע (רקע: null = ללא מוזיקת רקע; אפשר לשנות לקובץ mp3 אמביינט)
        sounds: {
            good: 'assets/sound/good.mp3',
            next: 'assets/sound/next.mp3',
            applause: 'assets/sound/applause.mp3',
            background: 'assets/sound/correctAns.mp3',
            backgroundVolume: 0.14,
            sfxVolume: 0.75
        }
    },

    // הגדרות כלליות
    general: {
        projectName: 'כיבוד הורים',
        organizationName: 'אור ישראלי'
    }
};

// מניעת שינויים בקונפיגורציה
Object.freeze(CONFIG);

// ייצוא הקונפיגורציה לשימוש בקבצים אחרים
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} 