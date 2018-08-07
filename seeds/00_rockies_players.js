
exports.seed = function (knex, Promise) {
  return knex('rockies_players').del()
    .then(function () {
      return knex('rockies_players').insert([
        {
          firstname: 'Tyler',
          lastname: 'Anderson',
          position: 'P'
        },
        {
          firstname: 'Yency',
          lastname: 'Almonte',
          position: 'P',
        },
        { 
          firstname: 'Wade',
          lastname: 'Davis',
          position: 'P',
        },
        { 
          firstname: 'Kyle',
          lastname: 'Freeland',
          position: 'P',
        },
        { 
          firstname: 'Jon',
          lastname: 'Grey',
          position: 'P',
        },
        { 
          firstname: 'Germon',
          lastname: 'Marques',
          position: 'P',
        },
        { 
          firstname: 'Jake',
          lastname: 'McGee',
          position: 'P',
        },
        { 
          firstname: 'Harrison',
          lastname: 'Musgrave',
          position: 'P',
        },
        { 
          firstname: 'Scott',
          lastname: 'Oberg',
          position: 'P',
        },
        { 
          firstname: 'Seunghwan',
          lastname: 'Oh',
          position: 'P',
        },
        { 
          firstname: 'Adam',
          lastname: 'Ottavino',
          position: 'P',
        },
        { 
          firstname: 'Bryan',
          lastname: 'Shaw',
          position: 'P',
        },
        { 
          firstname: 'Chris',
          lastname: 'Ianetta',
          position: 'C',
        },
        { 
          firstname: 'Tony',
          lastname: 'Wolters',
          position: 'C',
        },
        { 
          firstname: 'Tom',
          lastname: 'Murphy',
          position: 'C',
        },
        { 
          firstname: 'Nolan',
          lastname: 'Arenado',
          position: '3B',
        },
        { 
          firstname: 'Trevor',
          lastname: 'Story',
          position: 'SS',
        },
        { 
          firstname: 'DJ',
          lastname: 'LeMahieu',
          position: '2B',
        },
        { 
          firstname: 'Ian',
          lastname: 'Desmond',
          position: '1B',
        },
        { 
          firstname: 'Ryan',
          lastname: 'McMahon',
          position: '2B',
        },
        { 
          firstname: 'Pat',
          lastname: 'Valaika',
          position: 'OF',
        },
        { 
          firstname: 'Charlie',
          lastname: 'Blackmon',
          position: 'OF',
        },
        { 
          firstname: 'Carlos',
          lastname: 'Gonzales',
          position: 'OF',
        },
        { 
          firstname: 'David',
          lastname: 'Dahl',
          position: 'OF',
        },
        { 
          firstname: 'Gerardo',
          lastname: 'Parra',
          position: 'OF',
        }
      ]);
    })
}



