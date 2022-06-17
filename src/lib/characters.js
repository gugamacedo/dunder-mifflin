export default function loadCharacters(name='all') {
  const characters = [
    {
      name: 'Holly Flax',
      image: '/team/holly.jpg',
      seasons: [4, 5, 7],
      team: 'account'
    },
    {
      name: 'Michael Scott',
      image: '/team/michael.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7],
      team: 'account'
    },
    {
      name: 'Jo Benett',
      image: '/team/jo.jpg',
      seasons: [6, 7],
      team: 'account'
    },
    {
      name: 'Robert California',
      image: '/team/robert.jpg',
      seasons: [8],
      team: 'account'
    },
    {
      name: 'Charles Miner',
      image: '/team/charles.jpg',
      seasons: [5],
      team: 'account'
    },
    {
      name: 'Gabe Lewis',
      image: '/team/gabe.jpg',
      seasons: [6, 7, 8],
      team: 'account'
    },
    {
      name: 'Karen Filippelli',
      image: '/team/karen.jpg',
      seasons: [3, 4],
      team: 'account'
    },
    {
      name: 'Andy Bernard',
      image: '/team/andy.jpg',
      seasons: [3, 4, 5, 6, 7, 8, 9],
      team: 'account'
    },
    {
      name: 'Erin Hannon',
      image: '/team/erin.jpg',
      seasons: [5, 6, 7, 8, 9],
      team: 'account'
    },
    {
      name: 'Nellie Bertram',
      image: '/team/nellie.jpg',
      seasons: [8, 9],
      team: 'account'
    },
    {
      name: 'David Wallace',
      image: '/team/david.jpg',
      seasons: [2, 3, 4, 5, 6, 9],
      team: 'sales'
    },
    {
      name: 'Clark Green',
      image: '/team/clark.jpg',
      seasons: [9],
      team: 'sales'
    },
    {
      name: 'Pete Miller',
      image: '/team/pete.jpg',
      seasons: [9],
      team: 'sales'
    },
    {
      name: 'Dwight Schrute',
      image: '/team/dwight.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      team: 'sales'
    },
    {
      name: 'Jim Halpert',
      image: '/team/jim.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      team: 'sales'
    },
    {
      name: 'Pam Beesly',
      image: '/team/pam.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      team: 'sales'
    },
    {
      name: 'Jan Levinson',
      image: '/team/jan.jpg',
      seasons: [1, 2, 3, 4, 5],
      team: 'sales'
    },
    {
      name: 'Angela Martin',
      image: '/team/angela.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      team: 'sales'
    },
    {
      name: 'Darryl Philbin',
      image: '/team/darryl.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      team: 'sales'
    },
    {
      name: 'Ryan Howard',
      image: '/team/ryan.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      team: 'sales'
    },
    {
      name: 'Kelly Karpor',
      image: '/team/kelly.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      team: 'hr'
    },
    {
      name: 'Roy Anderson',
      image: '/team/roy.jpg',
      seasons: [1, 2, 3],
      team: 'hr'
    },
    {
      name: 'Oscar Martinez',
      image: '/team/oscar.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      team: 'hr'
    },
    {
      name: 'Kevin Malone',
      image: '/team/kevin.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      team: 'hr'
    },
    {
      name: 'Stanley Hudson',
      image: '/team/stanley.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      team: 'hr'
    },
    {
      name: 'Phyllis Vance',
      image: '/team/phyllis.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      team: 'hr'
    },
    {
      name: 'Toby Flenderson',
      image: '/team/toby.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      team: 'hr'
    },
    {
      name: 'Creed Bratton',
      image: '/team/creed.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      team: 'hr'
    },
    {
      name: 'Meredith Palmer',
      image: '/team/meredith.jpg',
      seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      team: 'hr'
    },
  ]

  if(name === 'all') {
    return characters
  }

  return characters.filter(item => item.name === name)
}
