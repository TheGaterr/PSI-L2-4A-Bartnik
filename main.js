const el = id => document.getElementById(id);


function updateCV(data) {
el('name').textContent = data.name || '{{IMIĘ NAZWISKO}}';
el('contact').textContent = data.contact || '{{EMAIL}} • {{TELEFON}} • {{MIASTO}}';
el('about').textContent = data.about || '{{KRÓTKI_OPIS}}';
el('hobby').textContent = data.hobby || '{{TWOJE_HOBBY}}';
el('favLang').textContent = data.favLang || '{{ULUBIONY_JĘZYK}}';
el('favWhy').textContent = data.favWhy || '{{DLACZEGO}}';
el('projects').textContent = data.projects || '{{PROJEKTY}}';

const skillsRoot = el('skills');
skillsRoot.innerHTML = '';
(data.skills || ['HTML','CSS','JavaScript']).forEach(skill => {
const li = document.createElement('li');
li.textContent = skill;
skillsRoot.appendChild(li);
});
}


const exampleData = {
name: 'Łukasz Bartnik',
contact: 'lukasz.bartnik@vp.pl • +48 123-456-789 • Szczecin',
about: 'Jestem uczniem w technikum informatycznym, uczę się programowania aplikacji, stron i bazy danych',
hobby: 'Muzyka klasyczna, sprzęt komputerowy',
favLang: 'Assembly',
favWhy: 'Lubię Assembly, ponieważ pozwala zrozumieć działanie komputera na najniższym poziomie.',
skills: ['HTML', 'CSS', 'JavaScript', 'Assembly'],
projects: 'BitMage, Strona CV, UI do bazy danych'
};

document.addEventListener('DOMContentLoaded', () => {
updateCV(exampleData);
});