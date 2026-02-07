import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const translations = {
    dataSource: { 
      en: 'Data sourced from official Maharashtra Government portals', 
      hi: 'आधिकारिक महाराष्ट्र सरकार पोर्टलों से प्राप्त डेटा', 
      mr: 'अधिकृत महाराष्ट्र सरकार पोर्टलवरून मिळवलेला डेटा' 
    },
    disclaimer: { 
      en: 'This platform simplifies information. Please verify details on official websites before applying.', 
      hi: 'यह प्लेटफॉर्म जानकारी को सरल बनाता है। आवेदन करने से पहले कृपया आधिकारिक वेबसाइटों पर विवरण सत्यापित करें।', 
      mr: 'हे व्यासपीठ माहिती सोपी करते. अर्ज करण्यापूर्वी कृपया अधिकृत वेबसाइटवर तपशील पडताळा.' 
    }
    
  };

  return (
    <footer className="mt-auto border-t border-border bg-primary/5">
      <div className="container py-8">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Trust badge */}
          <div className="flex items-center gap-2 rounded-full bg-secondary/50 px-4 py-2">
            <span className="text-sm font-medium text-secondary-foreground">
              {t(translations.dataSource)}
            </span>
          </div>

          {/* Disclaimer */}
          <p className="max-w-xl text-sm text-muted-foreground">
             {t(translations.disclaimer)}
          </p>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © 2026 JanSeva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
