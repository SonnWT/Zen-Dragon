function changeCharacter (character){
    switch (character){
        case 'ragnar':
            document.getElementById('img').src = "Asset/Character/ragnar.png";
            break;

        case 'freydis':
            document.getElementById('img').src = "Asset/Character/freydis.png";
            document.getElementById('name').innerHTML = 'Freydis Stormblade Wolfbane';
            document.getElementById('description1').innerHTML = 'Position: Assistant Professor';
            document.getElementById('description2').innerHTML = 'Age: 40';
            document.getElementById('description3').innerHTML = 'Freydis Stormblade Wolfbane, a renowned Dragon Rider from Zen Dragon Academy, commands the skies with unmatched skill and bravery. United with her dragon mount, they forge a legendary bond echoing across realms.';
            document.getElementById('description4').innerHTML = 'Specialist skill: Dragon Rider, proficient in the art of riding dragons, capable of navigating and commanding their dragon mount in battle and during exploration.';
            document.getElementById('achieve').innerHTML = "Achievements";
            document.getElementById('achievement1').innerHTML = '> Dragon Care Graduate: Ensured dragon well-being. <';
            document.getElementById('achievement2').innerHTML = '> Conflict Resolution: Mediated disputes. <';
            document.getElementById('achievement3').innerHTML = '> Curriculum Development: Enhanced learning. <';
            break;

        case 'bjorn':
            document.getElementById('img').src = "Asset/Character/bjorn.png";
            document.getElementById('name').innerHTML = 'Bjorn Thunderheart Ironhide';
            document.getElementById('description1').innerHTML = 'Position: Professor';
            document.getElementById('description2').innerHTML = 'Age: 60';
            document.getElementById('description3').innerHTML = 'Bjorn Thunderheart Ironhide, Dragon Handler at Zen Dragon Academy, commands dragon loyalty with unmatched expertise, ensuring their well-being and effectiveness, forging an unbreakable Viking-dragon bond.';
            document.getElementById('description4').innerHTML = 'Specialist Skill: Experienced Dragon Handler knowledgeable in dragon care, training, and well-being for optimal effectiveness.';
            document.getElementById('achieve').innerHTML = "Achievements";
            document.getElementById('achievement1').innerHTML = '> Teaching Apprentice: Trained in pedagogy and mentorship. <';
            document.getElementById('achievement2').innerHTML = '> Community Engagement: Fostered connections. <';
            document.getElementById('achievement3').innerHTML = '> Research Initiate: Conducted preliminary research. <';
            break;

        case 'olaf':
            document.getElementById('img').src = "Asset/Character/olaf.png";
            document.getElementById('name').innerHTML = 'Olaf Frostbane Snowshield';
            document.getElementById('description1').innerHTML = 'Position: Blacksmith';
            document.getElementById('description2').innerHTML = 'Age: 57';
            document.getElementById('description3').innerHTML = 'Olaf Frostbane Snowshield, Metal Mystic and Blacksmith of Zen Dragon Academy, crafts creations embodying dragon essence with unparalleled quality and strength.';
            document.getElementById('description4').innerHTML = 'Specialist skill: Metal Mystic, a blacksmith with this skill possesses an uncanny intuition for metalwork, forging creations of unparalleled quality and strength.';
            document.getElementById('achieve').innerHTML = "Achievements";
            document.getElementById('achievement1').innerHTML = '> Guild Induction: Prestigious blacksmith membership. <';
            document.getElementById('achievement2').innerHTML = '> Dragonforged Relic: Commissioned legendary symbol. <';
            document.getElementById('achievement3').innerHTML = '> Metallurgy Innovator: Advanced forging techniques. <';
            break;

        case 'erik':
            document.getElementById('img').src = "Asset/Character/erik.png";
            document.getElementById('name').innerHTML = 'Erik Bloodaxe Ironfist';
            document.getElementById('description1').innerHTML = 'Position: Principal';
            document.getElementById('description2').innerHTML = 'Age: 70';
            document.getElementById('description3').innerHTML = 'Erik Bloodaxe Ironfist, Dragon Sage and Principal of Zen Dragon Academy, holds unrivaled mastery of dragon lore, guiding the sacred bond between Viking and dragon.';
            document.getElementById('description4').innerHTML = 'Specialist Skill: Dragon Sage, rare Viking possessing unparalleled mastery of ancient dragon lore and innate understanding of their psyche, communing with dragons on a spiritual level with uncanny accuracy.'
            document.getElementById('achieve').innerHTML = "Achievements";
            document.getElementById('achievement1').innerHTML = '> Dragon Alliance: Historic Viking-dragon treaty. <';
            document.getElementById('achievement2').innerHTML = '> Legacy of Enlightenment: Renowned center of learning. <';
            document.getElementById('achievement3').innerHTML = '> Dragonlord Conclave Host: Hosted global dialogue event. <';
            break;

        case 'leif':
            document.getElementById('img').src = "Asset/Character/leif.png";
            document.getElementById('name').innerHTML = 'Leif Thunderstruck Warhammer';
            document.getElementById('description1').innerHTML = 'Position: Assistant Principal';
            document.getElementById('description2').innerHTML = 'Age: 63';
            document.getElementById('description3').innerHTML = 'Leif Thunderstruck Warhammer, Assistant Principal of Zen Dragon Academy, adeptly navigates crises to safeguard the school\'s safety and harmony, embodying resilience and strength amidst turmoil.';
            document.getElementById('description4').innerHTML = 'Specialist skill: Crisis Management Expert, the Assistant Principal proficiently handles crises and conflicts within the school, swiftly resolving issues to maintain safety and well-being.'
            document.getElementById('achieve').innerHTML = "Achievements";
            document.getElementById('achievement1').innerHTML = '> Crisis Management Champion: Led in adversity. <';
            document.getElementById('achievement2').innerHTML = '> Dragon Advocate: Strengthened Viking-dragon bond. <';
            document.getElementById('achievement3').innerHTML = '> Academic Innovator: Enhanced teaching methods. <';
            break;
    }
}

function changeCharacter2 (character){
    switch (character){
        case 'ragnar2':
            document.getElementById('img2').src = "Asset/Character/ragnar.png";
            break;

        case 'freydis2':
            document.getElementById('img2').src = "Asset/Character/freydis.png";
            document.getElementById('name2').innerHTML = 'Freydis Stormblade Wolfbane';
            document.getElementById('description1a').innerHTML = 'Position: Assistant Professor';
            document.getElementById('description2a').innerHTML = 'Age: 40';
            document.getElementById('description3a').innerHTML = 'Freydis Stormblade Wolfbane, a renowned Dragon Rider from Zen Dragon Academy, commands the skies with unmatched skill and bravery. United with her dragon mount, they forge a legendary bond echoing across realms.';
            document.getElementById('description4a').innerHTML = 'Specialist skill: Dragon Rider, proficient in the art of riding dragons, capable of navigating and commanding their dragon mount in battle and during exploration.';
            document.getElementById('achieve2').innerHTML = "Achievements";
            document.getElementById('achievement1a').innerHTML = '> Dragon Care Graduate: Ensured dragon well-being. <';
            document.getElementById('achievement2a').innerHTML = '> Conflict Resolution: Mediated disputes. <';
            document.getElementById('achievement3a').innerHTML = '> Curriculum Development: Enhanced learning. <';
            break;

        case 'bjorn2':
            document.getElementById('img2').src = "Asset/Character/bjorn.png";
            document.getElementById('name2').innerHTML = 'Bjorn Thunderheart Ironhide';
            document.getElementById('description1a').innerHTML = 'Position: Professor';
            document.getElementById('description2a').innerHTML = 'Age: 60';
            document.getElementById('description3a').innerHTML = 'Bjorn Thunderheart Ironhide, Dragon Handler at Zen Dragon Academy, commands dragon loyalty with unmatched expertise, ensuring their well-being and effectiveness, forging an unbreakable Viking-dragon bond.';
            document.getElementById('description4a').innerHTML = 'Specialist Skill: Experienced Dragon Handler knowledgeable in dragon care, training, and well-being for optimal effectiveness.';
            document.getElementById('achieve2').innerHTML = "Achievements";
            document.getElementById('achievement1a').innerHTML = '> Teaching Apprentice: Trained in pedagogy and mentorship. <';
            document.getElementById('achievement2a').innerHTML = '> Community Engagement: Fostered connections. <';
            document.getElementById('achievement3a').innerHTML = '> Research Initiate: Conducted preliminary research. <';
            break;

        case 'olaf2':
            document.getElementById('img2').src = "Asset/Character/olaf.png";
            document.getElementById('name2').innerHTML = 'Olaf Frostbane Snowshield';
            document.getElementById('description1a').innerHTML = 'Position: Blacksmith';
            document.getElementById('description2a').innerHTML = 'Age: 57';
            document.getElementById('description3a').innerHTML = 'Olaf Frostbane Snowshield, Metal Mystic and Blacksmith of Zen Dragon Academy, crafts creations embodying dragon essence with unparalleled quality and strength.';
            document.getElementById('description4a').innerHTML = 'Specialist skill: Metal Mystic, a blacksmith with this skill possesses an uncanny intuition for metalwork, forging creations of unparalleled quality and strength.';
            document.getElementById('achieve2').innerHTML = "Achievements";
            document.getElementById('achievement1a').innerHTML = '> Guild Induction: Prestigious blacksmith membership. <';
            document.getElementById('achievement2a').innerHTML = '> Dragonforged Relic: Commissioned legendary symbol. <';
            document.getElementById('achievement3a').innerHTML = '> Metallurgy Innovator: Advanced forging techniques. <';
            break;

        case 'erik2':
            document.getElementById('img2').src = "Asset/Character/erik.png";
            document.getElementById('name2').innerHTML = 'Erik Bloodaxe Ironfist';
            document.getElementById('description1a').innerHTML = 'Position: Principal';
            document.getElementById('description2a').innerHTML = 'Age: 70';
            document.getElementById('description3a').innerHTML = 'Erik Bloodaxe Ironfist, Dragon Sage and Principal of Zen Dragon Academy, holds unrivaled mastery of dragon lore, guiding the sacred bond between Viking and dragon.';
            document.getElementById('description4a').innerHTML = 'Specialist Skill: Dragon Sage, rare Viking possessing unparalleled mastery of ancient dragon lore and innate understanding of their psyche, communing with dragons on a spiritual level with uncanny accuracy.'
            document.getElementById('achieve2').innerHTML = "Achievements";
            document.getElementById('achievement1a').innerHTML = '> Dragon Alliance: Historic Viking-dragon treaty. <';
            document.getElementById('achievement2a').innerHTML = '> Legacy of Enlightenment: Renowned center of learning. <';
            document.getElementById('achievement3a').innerHTML = '> Dragonlord Conclave Host: Hosted global dialogue event. <';
            break;

        case 'leif2':
            document.getElementById('img2').src = "Asset/Character/leif.png";
            document.getElementById('name2').innerHTML = 'Leif Thunderstruck Warhammer';
            document.getElementById('description1a').innerHTML = 'Position: Assistant Principal';
            document.getElementById('description2a').innerHTML = 'Age: 63';
            document.getElementById('description3a').innerHTML = 'Leif Thunderstruck Warhammer, Assistant Principal of Zen Dragon Academy, adeptly navigates crises to safeguard the school\'s safety and harmony, embodying resilience and strength amidst turmoil.';
            document.getElementById('description4a').innerHTML = 'Specialist skill: Crisis Management Expert, the Assistant Principal proficiently handles crises and conflicts within the school, swiftly resolving issues to maintain safety and well-being.'
            document.getElementById('achieve2').innerHTML = "Achievements";
            document.getElementById('achievement1a').innerHTML = '> Crisis Management Champion: Led in adversity. <';
            document.getElementById('achievement2a').innerHTML = '> Dragon Advocate: Strengthened Viking-dragon bond. <';
            document.getElementById('achievement3a').innerHTML = '> Academic Innovator: Enhanced teaching methods. <';
            break;
    }
}

var boxes = document.querySelectorAll('.reveal');
    boxes.forEach(function(reveal) {
        observer.observe(reveal);
        box.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });