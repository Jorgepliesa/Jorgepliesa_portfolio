const fs = require('fs');
let content = fs.readFileSync('app/(root)/page.jsx', 'utf8');

// Imports
content = content.replace(
  'import { faEnvelope } from "@fortawesome/free-solid-svg-icons";',
  'import { faEnvelope } from "@fortawesome/free-solid-svg-icons";\nimport { useLanguage } from "@/context/LanguageContext";'
);

// home component hook
content = content.replace(
  'const MyPage = () => {\n\treturn (\n\t\t<FullPageWrapper>',
  'const MyPage = () => {\n\tconst { t } = useLanguage();\n\treturn (\n\t\t<FullPageWrapper>'
);

// home.desc_1 & desc_2
content = content.replace(
  'Hi! I&rsquo;am Alvalen, A fullstack software\n\t\t\t\t\t\t\tengineer specializing in modern Web Development with\n\t\t\t\t\t\t\ta growing focus on Artificial Intelligence. I\n\t\t\t\t\t\t\tarchitect scalable, production-ready engines—from\n\t\t\t\t\t\t\thigh-traffic Java microservices to RAG-powered SaaS\n\t\t\t\t\t\t\tplatforms.',
  "{t('home.desc_1')} {t('home.desc_2')}"
);

// home.contact_me
content = content.replace(
  '<a href="#contact">Contact Me</a>',
  '<a href="#contact">{t(\'home.contact_me\')}</a>'
);

content = content.replace(
  '>\n\t\t\t\t\t\t\tAbout Me\n\t\t\t\t\t\t</motion.h1>',
  '>\n\t\t\t\t\t\t\t{t("home.about_me")}\n\t\t\t\t\t\t</motion.h1>'
);

content = content.replace(
  '<Link href="/projects" className="underline">\n\t\t\t\t\t\t\t\t\tSee Projects\n\t\t\t\t\t\t\t\t</Link>',
  '<Link href="/projects" className="underline">\n\t\t\t\t\t\t\t\t\t{t("home.see_projects")}\n\t\t\t\t\t\t\t\t</Link>'
);

content = content.replace(
  '>\n\t\t\t\t\t\t\tMy Projects\n\t\t\t\t\t\t</motion.h1>',
  '>\n\t\t\t\t\t\t\t{t("home.my_projects")}\n\t\t\t\t\t\t</motion.h1>'
);

content = content.replace(
  '>\n\t\t\t\t\t\t\tI love creating robust software, web applications and games that are scalable, maintainable, and user-centric. Below are some highlights of my recent work.\n\t\t\t\t\t\t</motion.h4>',
  '>\n\t\t\t\t\t\t\t{t("home.projects_desc")}\n\t\t\t\t\t\t</motion.h4>'
);

content = content.replace(
  '>\n\t\t\t\t\t\t\t\t\t\tMore\n\t\t\t\t\t\t\t\t\t</Link>',
  '>\n\t\t\t\t\t\t\t\t\t\t{t("home.more")}\n\t\t\t\t\t\t\t\t\t</Link>'
);

content = content.replace(
  '>\n\t\t\t\t\t\t\tLet&apos;s Get in Touch\n\t\t\t\t\t\t</motion.h1>',
  '>\n\t\t\t\t\t\t\t{t("home.get_in_touch")}\n\t\t\t\t\t\t</motion.h1>'
);

fs.writeFileSync('app/(root)/page.jsx', content);
