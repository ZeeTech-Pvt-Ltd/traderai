const fs = require('fs');
const path = require('path');
function walk(dir){let r=[];for(const e of fs.readdirSync(dir,{withFileTypes:true})){const f=path.join(dir,e.name);if(e.isDirectory())r=r.concat(walk(f));else if(/\.jsx$/.test(e.name))r.push(f);}return r;}
const colors = ['bg-[#f9f9f9]','bg-[#fafafa]','bg-[#f2f3f5]','bg-white','text-[#1b1815]','text-[#6b6b6b]','text-[#5f5852]','border-[#e5e5e5]'];
const files = walk(path.join(__dirname,'src'));
let issues=[];
for(const f of files){
  const lines = fs.readFileSync(f,'utf8').split('\n');
  lines.forEach((line,i)=>{
    for(const c of colors){
      if(line.indexOf(c)>=0){
        const prop = c.split('-')[0];
        const re = new RegExp('dark:'+prop+'\\-\\[','g');
        if(!re.test(line)){
          issues.push(path.relative(process.cwd(),f)+':'+(i+1)+': '+line.trim().slice(0,130));
        }
      }
    }
  });
}
const uniq=[...new Set(issues)];
console.log(uniq.length+' issue lines:');
uniq.forEach(l=>console.log(l));
