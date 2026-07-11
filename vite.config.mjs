import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        notFound: resolve(__dirname, '404.html'),
        termsOfUse: resolve(__dirname, 'terms-of-use.html'),
        privacyPolicy: resolve(__dirname, 'privacy-policy.html'),
        dataPrivacy: resolve(__dirname, 'data-privacy.html'),
        investors: resolve(__dirname, 'investors.html'),
        companyUpdates: resolve(__dirname, 'company-updates.html'),
        messengerHub: resolve(__dirname, 'messenger-hub.html'),
        aiLearningCenter: resolve(__dirname, 'ai-learning-center.html'),
        studentPortal: resolve(__dirname, 'student-portal.html'),
        teacherPortal: resolve(__dirname, 'teacher-portal.html'),
        bankingSkillsAcademy: resolve(__dirname, 'banking-skills-academy.html'),
        microLendingPlatform: resolve(__dirname, 'micro-lending-platform.html'),
        microSmePlatform: resolve(__dirname, 'micro-sme-platform.html'),
        paykh: resolve(__dirname, 'paykh.html'),
        pairMeUp: resolve(__dirname, 'pair-me-up.html'),
      },
    },
  },
});
