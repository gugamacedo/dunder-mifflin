export default function loadCharacters(name='all') {
  const characters = [
    {
      name: 'Holly Flax',
      image: '/team/holly.jpg',
      seasons: [4, 5, 7],
      occupation: 'Human Resources',
      aliases: ['Fanny Smellmore', 'DJ Jazzy Flax', 'Princess Nincompoop', 'Necropolis'],
      brand: 'Nashua',
      portrayed: 'Amy Ryan',
      firstEp: 'Goodbye, Toby',
      trivia: 'Holly was introduced to be the first person who actually liked Michael, allowing his character to mature. She was not intended to be his life partner, and was planned to be in only six episodes.'
    },
    {
      name: 'Michael Scott',
      image: '/team/michael.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7],
      occupation: 'Regional Manager',
      aliases: ['Ping', 'Michael the Magic', 'Michael Scarn', 'Michael Klump', 'Date Mike', 'Mike (by Darryl)', 'Blind Guy McSqueezy', 'Prison Mike', 'Caleb Crawdad', 'Master of Guidance', 'Michael Wonka', 'Reginald Poofta', 'Michael Scotch', 'Spiros', 'Orville Tootenbacher', 'Jesus Christ', 'Johnny Carson', 'Michael J Fox', 'Mr. Fox', 'Nicki Minaj', 'The Incredible Mr. Fox', 'Santa Bond', 'Beyoncé', 'Captain Bruisin\'', 'Michael Jackson', 'Ryan\'s Girlfriend', 'Dennis the Menace', 'Eddie Murphy', 'Spicoli Guy', 'MC Mike Scott', 'Michael Snot', 'Elton', 'Mr. Scott (By The High School Kids)'],
      brand: 'Scranton',
      portrayed: 'Steve Carell',
      firstEp: 'Pilot',
      trivia: 'His role models are Bob Hope, Abraham Lincoln, Bono, and God. Michael lost his virginity when he was 28. His signature saying is "That\'s what she said". Michael is almost incapable of keeping a secret. His deepest fear is being alone.'
    },
    {
      name: 'Andy Bernard',
      aliases: ['Nard Dog', 'Nard Pup', 'Bro Nard', 'Nard Man', 'Boner Champ', 'Ace', 'Drew', 'Moon Face', 'Office Pariah', 'Buzz', 'Hubble', 'Puke', 'Pencil Dick', 'Lionel Frankenstein', 'Jelly Roll', 'Baby Wawa', 'King Butt' , 'Iceman', 'Funny Guy', 'Jabroni', 'Bernard Dog', 'Sly Dog', 'Older Male Lab Assistant Number One', 'Demandy', 'Regional Manager', 'Singing Buffoon'],
      occupation: 'Director of Sales',
      brand: 'Stamford',
      image: '/team/andy.jpg',
      seasons: [3, 4, 5, 6, 7, 8, 9],
      portrayed: 'Ed Helms',
      firstEp: 'Gay Witch Hunt',
      trivia: 'Andy\'s trademark "Rid-dit-dit-di-doo" was something that some of Ed Helms\'s middle school classmates used. It was an expression of triumph after getting off a good zinger.'
    },
    {
      name: 'Erin Hannon',
      image: '/team/erin.jpg',
      seasons: [5, 6, 7, 8, 9],
      occupation: 'Receptionist',
      aliases: ['Kelly Erin Hannon (Full name)', 'Hannon (by Charles)', 'E (by Darryl)', 'Princess Ding Dong (by Meredith)', 'Tabitha', 'Space Orphan'],
      brand: 'Scranton',
      portrayed: 'Ellie Kemper',
      firstEp: 'Michael Scott Paper Company',
      trivia: 'Kemper described herself as a "huge fan" of the show and was thrilled to be cast. She was originally intended to do only one episode, then was kept for the final two episodes of the fifth season, before becoming a series regular.'
    },
    {
      name: 'Kevin Malone',
      image: '/team/kevin.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      occupation: 'Accountant',
      aliases: ['Kev', 'Chumbo', 'Kool-Aid Man', 'Papa Bear', 'Child Molester', 'Dumpster man', 'Ashton Kutcher', 'Cookie Monster'],
      brand: 'Scranton',
      portrayed: 'Brian Baumgartner',
      firstEp: 'Pilot',
      trivia: 'During the time period between the second and third seasons, NBC posted The Accountants, a season of "webisodes" with Kevin, Oscar, and Angela attempting to solve an accounting error. The error ends up being the fault of Angela and when it is discovered, Kevin says it is the best day of his life.'
    },
    {
      name: 'Jan Levinson',
      image: '/team/jan.jpg',
      seasons: [1, 2, 3, 4, 5],
      occupation: 'Vice President of Sales',
      aliases: ['Jan Levinson-Gould', 'Jan', 'Hillary Rodham Clinton', 'Godzillary', 'Lan Jevinson', 'Ice Queen', 'Dirty Bitch', 'Urkel Grue', 'Babe'],
      brand: 'Dunder Mifflin',
      portrayed: 'Melora Hardin',
      firstEp: 'Pilot',
      trivia: 'In the pilot, the character of Jan was a single-episode guest, with the possibility of becoming a recurring character. During filming of that episode, Melora Hardin, Steve Carell and Greg Daniels laughed at the weird dynamic between Jan and Michael and if the show made it to a second season, "we should have them hook up".'
    },
    {
      name: 'Darryl Philbin',
      image: '/team/darryl.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      occupation: 'Warehouse Assistant',
      aliases: ['Regis', 'Reg', 'Rog', 'Darryl Rogers', 'Mitta Rogers', 'Darnell'],
      brand: 'Scranton',
      portrayed: 'Craig Robinson',
      firstEp: 'The Alliance',
      trivia: 'As a subtle prank and possible retort to Michael\'s antics, Darryl teaches Michael "black man phrases", such as "fleece it out", "goin\' mach five", "bippity boppity, gimme the zoppity", and "dinkin\' flicka." In addition, Darryl teaches Michael a handshake that Michael believes to be "ghetto".'
    },
    {
      name: 'Oscar Martinez',
      image: '/team/oscar.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      occupation: 'Special Projects Manager',
      aliases: ['C-Span', 'Oscar Mayer Weiner Lover', 'Bacchus God of Wine', 'Actually', 'Faggy (Michael)', 'Oscar the Homosexual Accountant (Michael)', 'Gay', 'Big-O (by Luke Cooper)'],
      brand: 'Scranton',
      portrayed: 'Oscar Nunez',
      firstEp: 'Pilot',
      trivia: 'Oscar inserts himself into a lot of conversations to add facts or correct grammar, he tends to use "actually" a lot when doing so. In a deleted scene from "Gay Witch Hunt", Oscar points out that he mentioned that he was gay during his job interview, but Michael thought it was a joke.'
    },
    {
      name: 'Pam Beesly',
      image: '/team/pam.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      occupation: 'Receptionist',
      aliases: ['Beesly', 'Office Mattress', 'Pamcake', 'PamPam and her Pam Pams', 'Bart Simpson of Scranton', 'Pam-Pam!', 'Pama-lama-ding-dong', 'Big Pregs', 'Pam, Pam, thank you ma\'am', 'Pam-burger-with-cheese', 'Pamera', 'Pam-M-S', 'Pan', 'Spamster', 'Pam, Ms. Beesly if you\'re nasty', 'Ampay', 'Christmas Pam', 'Candied Pams', 'Pam-Chop', 'Pamcasso', 'Pam-ola', 'Pretty Pam', 'Pammy', 'Little Miss Thing', 'New York'],
      brand: 'Scranton',
      portrayed: 'Jenna Fischer',
      firstEp: 'Pilot',
      trivia: 'Pam wears a pink cardigan in episodes where it is suggested that she recently had sex. See Pam\'s lucky pink cardigan. Jenna Fischer and Angela Kinsey are good friends in real life. Pam and Dwight form a brief friendship while Dwight is suffering from a concussion.'
    },
    {
      name: 'Jim Halpert',
      image: '/team/jim.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      occupation: 'Sales Representative',
      aliases: ['Fat Halpert', 'Tuna', 'Big Tuna (by Andy)', 'Big Haircut (by Andy)', 'Halpert', 'The Hot One', 'Jimothy', 'Big Haircut', 'Thin Sliced Tuna', 'James Trickington', 'Jim Bag', 'William Buttlicker', 'Mr Balance (by Dwight)', 'Skippy', 'Zuckerberg', 'Jimmy', 'Tall Guy (by Creed)', 'Tuna Turner', 'The Original Fry Cook', 'Jimbo', 'Jim Samtanko'],
      brand: 'Scranton',
      portrayed: 'John Krasinski',
      firstEp: 'Pilot',
      trivia: 'Jim has appeared in every single episode of The Office with the exception of "Mafia," in which only his voice can be heard.'
    },
    {
      name: 'Dwight Schrute',
      image: '/team/dwight.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      occupation: 'Assistant to the Regional Manager',
      aliases: ['D', 'D-Money', 'Dwayne', 'Possum', 'Mr. Poop', 'Mr. Snoot', 'Dwight Fart Schrute', 'Jackhammer', 'Gun Safety Dwight', 'Big City', 'Recyclops', 'Michael Scotch', 'Samuel L. Chang', 'Bobble Head Joe', 'Dwight Danger Schrute', 'Dunder Mifflin Head salesman', 'Assistant to the Regional Manager', 'D.K.S.', 'Monkey Trainer', 'D-Dub-Dog', 'Schru-berry Blue', 'Dwigt', 'D.K Schrute', 'Dragon', 'Computron', 'That other jackass', 'Dwight Shelford', 'Jacques Souvenier'],
      brand: 'Scranton',
      portrayed: 'Rainn Wilson',
      firstEp: 'Pilot',
      trivia: 'In the episode "Valentine\'s Day", Dwight is given a bobblehead doll as a Valentine\'s gift, from Angela. Following the episode, fans of the show petitioned NBC to make the bobblehead doll available for purchase on their online store. NBC responded by creating an initial run of 4,000 bobblehead dolls, which sold out almost immediately.'
    },
    {
      name: 'Angela Martin',
      aliases: ['Monkey', 'Kitchen Witch', 'Voodoo Mama Juju', 'Juju Boo-Boo', 'Pumpkin', 'Andrea, The Office Bitch', 'Booster Seat', 'Angelo', 'Little Onion'],
      occupation: 'Senior Accountant',
      brand: 'Scranton',
      image: '/team/angela.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      portrayed: 'Angela Kinsey',
      firstEp: 'Pilot',
      trivia: 'Kinsey was pregnant during the filming of season 4, noticeably so from the episodes Dinner Party through Goodbye, Toby. The producers decided not to incorporate her pregnancy into the story line and shot around it.'
    },
    {
      name: 'Kelly Karpor',
      image: '/team/kelly.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8],
      occupation: 'Customer Service Representative',
      aliases: ['The Business Bitch', 'The Diet Bitch', 'The Shopping Bitch', 'The Etiquette Bitch'],
      brand: 'Scranton',
      portrayed: 'Mindy Kaling',
      firstEp: 'Diversity Day',
      trivia: 'Kelly has decided to call herself the business bitch, the diet bitch, the shopping bitch, and the etiquette bitch because it is important to brand yourself.'
    },
    {
      name: 'Ryan Howard',
      image: '/team/ryan.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8],
      occupation: 'Temp',
      aliases: ['Temp', 'Fire Guy', 'Kid', 'Fired Guy', 'Big Turkey', 'Hired Guy', 'Bryan', 'Bobcat', 'Douchebag', 'Mr.Understood', 'Rye-Guy', 'Rye-Bread', 'Shoe-bitch', 'The Belle of the Ball', 'Estaban the Cleaning Man', 'Hottest in the office', 'Little Old Man Boy', 'The Guy Who Looks Like A Murderer'],
      brand: 'Scranton',
      portrayed: 'B.J. Novak',
      firstEp: 'Pilot',
      trivia: 'B. J. Novak is one of the show\'s writing directors and executive producers. During this time, his role is significantly expanded to that of a main character.'
    },
    {
      name: 'Stanley Hudson',
      image: '/team/stanley.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      occupation: 'Sales Representative',
      aliases: ['Stanley the Manly', 'Stan', 'Michael Scarn (narration)', 'Florida Stanley', 'Stankley', 'Papa Bear (by Dwight)'],
      brand: 'Scranton',
      portrayed: 'Leslie David Baker',
      firstEp: 'Pilot',
      trivia: 'Stanley begins to explain something in great detail to get people\'s attention, and it ends with, “...and shove it up your butt!”'
    },
    {
      name: 'Creed Bratton',
      image: '/team/creed.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      occupation: 'Quality Assurance',
      aliases: ['Old Man', 'Wacky Weed Tim', 'William Charles Schneider', 'Jeff Bomondo', 'Papa Smurf', 'Iron to the Fire'],
      brand: 'Scranton',
      portrayed: 'Creed Bratton',
      firstEp: 'Pilot',
      trivia: 'In a deleted scene from "The Convict", Creed states that he has been incarcerated before and that prison is where he obtained the name "Creed", though he later changes his story, implying that he had previously killed a man named Creed Bratton and assumed his identity.'
    },
    {
      name: 'Robert California',
      image: '/team/robert.jpg',
      seasons: [8],
      occupation: 'CEO',
      aliases: ['RC (by Darryl)', 'The F***ing Lizard King (by himself)', 'Bob Kazamakis'],
      brand: 'Sabre',
      portrayed: 'James Spader',
      firstEp: 'Search Committee',
      trivia: 'Spader\'s acting had been particularly lauded by his fellow Office cast members. In an interview with Huffington Post, Brian Baumgartner stated that "He has these demented arguments that on the surface make no sense, but he\'s talking, and suddenly and you\'re like, Oh yeah, that\'s right! That\'s right!".'
    },
    {
      name: 'Nellie Bertram',
      image: '/team/nellie.jpg',
      seasons: [8, 9],
      occupation: 'Special Projects Manager',
      aliases: ['Nellie'],
      brand: 'Sabre',
      portrayed: 'Catherine Tate',
      firstEp: 'Search Committee',
      trivia: 'The writers admit that they got Nellie off to a bad start as a conniving schemer, and they were unable to recover from that. They felt bad that they were wasting Catherine Tate\'s comedic talent.'
    },
    {
      name: 'Gabe Lewis',
      image: '/team/gabe.jpg',
      seasons: [6, 7, 8, 9],
      occupation: 'Coordinating Director for Emerging Regions',
      aliases: ['GSL', 'Birdman', 'Skeleton Man', 'Gabewad', 'Katy Perry'],
      brand: 'Sabre',
      portrayed: 'Zach Woods',
      firstEp: 'Moving On',
      trivia: 'Gabe is the tallest character in the office coming at an inch taller than Jim. In the episode "Gettysburg" Zach Woods\' act on Abraham Lincoln is fully improvised.'
    },
    {
      name: 'Jo Benett',
      image: '/team/jo.jpg',
      seasons: [6, 7],
      occupation: 'CEO',
      aliases: ['Jolene'],
      brand: 'Sabre',
      portrayed: 'Kathy Bates',
      firstEp: 'Sabre',
      trivia: 'She wrote an autobiography, titled Take a Good Look, and gave it to everyone in the office. She has multiple dogs; the seen ones named Calle, Jo Jr., Cornelius and BoBo.'
    },
    {
      name: 'Meredith Palmer',
      image: '/team/meredith.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      occupation: 'Accountant',
      aliases: ['Mary-Beth (by Creed)', 'Fire Girl', 'Floozy', 'Alkie', 'Einstein (Sarcastically)', 'Vomit Mop', 'Floor Meat', 'Flesh Hoover'],
      brand: 'Scranton',
      portrayed: 'Kate Flannery',
      firstEp: 'Diversity Day',
      trivia: 'Kate Flannery describes Meredith\'s fashion sense as "a messed up kindergarten teacher." The running joke of Meredith being caught topless bothered her father so much, he wrote her a letter that read, "Dear Kate, stop taking your clothes off. Love Dad.'
    },
    {
      name: 'Phyllis Vance',
      image: '/team/phyllis.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      occupation: 'Sales Representative',
      aliases: ['Mama Goose', 'Philly', 'Easy Rider', 'Phallus', 'Bushiest Beaver', 'Venus (by Luke Cooper)'],
      brand: 'Scranton',
      portrayed: 'Phyllis Smith',
      firstEp: 'Pilot',
      trivia: 'Phyllis invited Michael to her wedding because it was the only way she could get six weeks off for her honeymoon.'
    },
    {
      name: 'David Wallace',
      image: '/team/david.jpg',
      seasons: [2, 3, 4, 5, 6, 8, 9],
      occupation: 'CFO',
      aliases: ['Detective Wallace', 'David Walrus', 'World\'s Best Boss'],
      brand: 'Dunder Mifflin',
      portrayed: 'Andy Buckley',
      firstEp: 'Valentine\'s Day Alliance',
      trivia: 'It is known he has a daughter which was referenced in "Secret Santa" who is in elementary school. Michael reveals he will pretend to be her to reach David in an emergency.'
    },
    {
      name: 'Karen Filippelli',
      image: '/team/karen.jpg',
      seasons: [3, 4],
      occupation: 'Sales Representative',
      aliases: ['The Other Woman'],
      brand: 'Stamford',
      portrayed: 'Rashida Jones',
      firstEp: 'Gay Witch Hunt',
      trivia: 'Karen dates Jim Halpert throughout the third season. Outside of the Office universe, Rashida Jones and John Krasinski dated for a brief period of time.'
    },
    {
      name: 'Charles Miner',
      image: '/team/charles.jpg',
      seasons: [5],
      occupation: 'Vice President of Sales',
      aliases: ['Chuck'],
      brand: 'Dunder Mifflin',
      portrayed: 'Idris Elba',
      firstEp: 'New Boss',
      trivia: 'In "Secret Santa" all of corporate is fired, including Charles Miner and David Wallace by a company called Sabre. In "Viewing Party," when Michael is listing all his former bosses, he mentions Charles when he says "Charles was fired."'
    },
    {
      name: 'Cathy Simms',
      image: '/team/cathy.jpg',
      seasons: [8],
      occupation: 'Office Administrator',
      aliases: ['Cath', 'Pam\'s Replacement'],
      brand: 'Scranton',
      portrayed: 'Lindsey Broad',
      firstEp: 'Pam\'s Replacement',
      trivia: 'According to John Krasinski, there were plans to write a scene depicting Jim making out with Cathy in Jim\'s hotel room. Krasinski objected to the plan, even refusing outright to shoot the scene as he believed this would potentially drive away the audience\'s goodwill in terms of the character if this were to occur.'
    },
    {
      name: 'Clark Green',
      image: '/team/clark.jpg',
      seasons: [9],
      occupation: 'Director of Sales',
      aliases: ['Chuck'],
      brand: 'Northeast Region',
      portrayed: 'Idris Elba',
      firstEp: 'New Boss',
      trivia: 'Two deleted scenes in "Finale" hinted at a burgeoning relationship between Clark and Dakota, the accountant hired to replace Kevin.'
    },
    {
      name: 'Pete Miller',
      image: '/team/pete.jpg',
      seasons: [9],
      occupation: 'Customer Service Representative',
      aliases: ['Plop', 'New Jim'],
      brand: 'Scranton',
      portrayed: 'Jake Lacy',
      firstEp: 'New Guys',
      trivia: 'Andy\'s habit of calling Pete "Plop" is reminiscent of him calling Jim "Big Tuna". In both cases, it\'s been debated whether or not Andy knows their real names.'
    },
    {
      name: 'Roy Anderson',
      image: '/team/roy.jpg',
      seasons: [1, 2, 3],
      occupation: 'Warehouse Worker',
      aliases: ['Dwight\'s punching bag'],
      brand: 'Scranton',
      portrayed: 'David Denman',
      firstEp: 'Pilot',
      trivia: 'In "The Negotiation", Roy revealed that the only reason he tolerated Pam\'s friendship with Jim was because he thought that Jim was gay.'
    },
    {
      name: 'Todd Packer',
      image: '/team/todd.jpg',
      seasons: [2, 3, 6, 7, 8, 9],
      occupation: 'Traveling Salesman',
      aliases: ['Packer', 'Pack-Man', 'Packster', 'Wacky Pack'],
      brand: 'Scranton',
      portrayed: 'David Koechner',
      firstEp: 'Sexual Harassment',
      trivia: 'Fed up with Packer\'s presence in the office, Jim and Dwight prank Packer into leaving Dunder Mifflin and transferring to Sabre\'s corporate headquarters in Tallahassee, letting him quit to head out to the nonexistent job offer.'
    },
    {
      name: 'Toby Flenderson',
      image: '/team/toby.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      occupation: 'Human Resources',
      aliases: ['Jerky Face', 'Evil Snail', 'The Antichrist', 'Satan', 'The Silent Killer', 'Lemonhead', 'Waste of Life', 'The Worst', 'Everything Wrong with the Paper Industry'],
      brand: 'Scranton',
      portrayed: 'Paul Lieberstein',
      firstEp: 'Diversity Day',
      trivia: 'When Michael gives his two weeks notice, Toby shows he is not as resentful towards Michael as Michael is to him in a talking head, referring to him as "a movie on an airplane, which is nothing special but something to watch".'
    },
    {
      name: 'AJ',
      aliases: ['Fatty'],
      occupation: 'Sales Representative',
      brand: 'Nashua',
      seasons: [5, 7],
      portrayed: 'Rob Huebel',
      image: '/team/aj.jpg',
      firstEp: 'Lecture Circuit Part 2',
      trivia: 'Actor Rob Huebel would be stopped on the street by fans of the show who tell him, "You have to get out of the way, man."'
    },
  ]

  if(name === 'all') {
    return characters
  }

  return characters.find(item => item.name.replace(/\s+/g, '') === name)
}
