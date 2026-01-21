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


function saveToLocal(data){
try{ localStorage.setItem('cv_data_v2', JSON.stringify(data)); }catch(e){console.warn('LocalStorage error',e)}
}
function loadFromLocal(){
try{ const raw = localStorage.getItem('cv_data_v2'); return raw ? JSON.parse(raw) : null }catch(e){return null}
}


function formatDate(d){
const day = String(d.getDate()).padStart(2,'0');
const month = String(d.getMonth()+1).padStart(2,'0');
const year = d.getFullYear();
return `${day}.${month}.${year}`;
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
const saved = loadFromLocal();
const data = saved || exampleData;
updateCV(data);
const now = new Date();
const dateStr = formatDate(now);
const updated = el('updatedAt');
if(updated) updated.textContent = dateStr;
if(!saved) saveToLocal(data);
});


window.CV = {
updateCV, saveToLocal, loadFromLocal
};