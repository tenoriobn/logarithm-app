const fs = require('fs');

const path = 'src/app/politica-de-privacidade/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Add aria-labelledby to the first section
content = content.replace(
  '<section className="bg-surface-gradient',
  '<section aria-labelledby="solutions-section-title" className="bg-surface-gradient'
);

// Add aria-label to the second section
content = content.replace(
  '<section className="text-gradient text-gradient-white',
  '<section aria-label="Detalhes da Política de Privacidade" className="text-gradient text-gradient-white'
);

// Replace divs with sections and h3 with h2 for topics
// We use a regex that captures the entire block to easily replace the opening and closing tags.
// A block starts with <div className="3xl:space-y-[.834vw] space-y-2 md:space-y-4"> and ends with </div> before the next block or </section>
const regex = /(<div className="3xl:space-y-\[\.834vw\] space-y-2 md:space-y-4">)\s*(<h3 className="3xl:text-\[1\.666vw\] text-2xl font-medium md:text-\[2rem\]">)\s*(.*?)\s*(<\/h3>)([\s\S]*?)(          <\/div>)/g;

content = content.replace(regex, (match, divTag, h3Tag, title, h3Close, innerContent, divClose) => {
  const cleanTitle = title.replace(/^[0-9]+\.\s*/, '').toLowerCase();
  let id = cleanTitle
    .replace(/[áàãâä]/g, 'a')
    .replace(/[éèêë]/g, 'e')
    .replace(/[íìîï]/g, 'i')
    .replace(/[óòõôö]/g, 'o')
    .replace(/[úùûü]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
    
  return `<section aria-labelledby="${id}" className="3xl:space-y-[.834vw] space-y-2 md:space-y-4">\n            <h2 id="${id}" className="3xl:text-[1.666vw] text-2xl font-medium md:text-[2rem]">\n              ${title}\n            </h2>${innerContent}          </section>`;
});

fs.writeFileSync(path, content, 'utf8');
console.log('Done!');
