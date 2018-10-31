
exports.seed = function (knex, Promise) {
  return knex('rockies_players').del()
    .then(function () {
      return knex('rockies_players').insert([
        {
          firstname: 'Tyler',
          lastname: 'Anderson',
          position: 'P',
          image: 'https://d3k2oh6evki4b7.cloudfront.net/req/201810292/images/headshots/5/5979132a_mlbam.jpg',
        },
        {
          firstname: 'Yency',
          lastname: 'Almonte',
          position: 'P',
          image: 'https://d3k2oh6evki4b7.cloudfront.net/req/201810171/images/headshots/9/9c8fdfe5_mlbam.jpg',
        },
        { 
          firstname: 'Wade',
          lastname: 'Davis',
          position: 'P',
          image: 'https://d3k2oh6evki4b7.cloudfront.net/req/201810292/images/headshots/c/cc936b69_mlbam.jpg',
        },
        { 
          firstname: 'Kyle',
          lastname: 'Freeland',
          position: 'P',
          image: 'https://d3k2oh6evki4b7.cloudfront.net/req/201810292/images/headshots/8/8195b39a_mlbam.jpg',
        },
        { 
          firstname: 'Jon',
          lastname: 'Grey',
          position: 'P',
          image: 'https://d3k2oh6evki4b7.cloudfront.net/req/201810292/images/headshots/0/0608e859_mlbam.jpg',
        },
        { 
          firstname: 'German',
          lastname: 'Marquez',
          position: 'P',
          image: 'https://d3k2oh6evki4b7.cloudfront.net/req/201810292/images/headshots/b/b8b3066b_mlbam.jpg',
        },
        { 
          firstname: 'Jake',
          lastname: 'McGee',
          position: 'P',
          image: 'https://d3k2oh6evki4b7.cloudfront.net/req/201810292/images/headshots/e/ee8ec813_mlbam.jpg',
        },
        { 
          firstname: 'Harrison',
          lastname: 'Musgrave',
          position: 'P',
          image: 'https://d3k2oh6evki4b7.cloudfront.net/req/201810292/images/headshots/d/dd8caa6f_mlbam.jpg',
        },
        { 
          firstname: 'Scott',
          lastname: 'Oberg',
          position: 'P',
          image: 'https://d3k2oh6evki4b7.cloudfront.net/req/201810292/images/headshots/4/4aad2103_mlbam.jpg',
        },
        { 
          firstname: 'Seunghwan',
          lastname: 'Oh',
          position: 'P',
          image: 'https://d3k2oh6evki4b7.cloudfront.net/req/201810292/images/headshots/9/955af95f_mlbam.jpg',
        },
        { 
          firstname: 'Adam',
          lastname: 'Ottavino',
          position: 'P',
          image: 'https://d3k2oh6evki4b7.cloudfront.net/req/201810292/images/headshots/1/188f2e67_mlbam.jpg',
        },
        { 
          firstname: 'Bryan',
          lastname: 'Shaw',
          position: 'P',
          image: 'https://d3k2oh6evki4b7.cloudfront.net/req/201810292/images/headshots/2/2ca6fdbb_mlbam.jpg',
        },
        { 
          firstname: 'Chris',
          lastname: 'Ianetta',
          position: 'C',
          image: 'https://d3k2oh6evki4b7.cloudfront.net/req/201810292/images/headshots/b/beaa62ca_mlbam.jpg',
        },
        { 
          firstname: 'Tony',
          lastname: 'Wolters',
          position: 'C',
          image: 'https://d3k2oh6evki4b7.cloudfront.net/req/201810292/images/headshots/e/ea4ff088_mlbam.jpg',
        },
        { 
          firstname: 'Tom',
          lastname: 'Murphy',
          position: 'C',
          image: 'https://d3k2oh6evki4b7.cloudfront.net/req/201810171/images/headshots/4/424b365a_mlbam.jpg',
        },
        { 
          firstname: 'Nolan',
          lastname: 'Arenado',
          position: '3B',
          image: 'https://d3k2oh6evki4b7.cloudfront.net/req/201810292/images/headshots/4/4009314f_mlbam.jpg',
        },
        { 
          firstname: 'Trevor',
          lastname: 'Story',
          position: 'SS',
          image: 'https://d3k2oh6evki4b7.cloudfront.net/req/201810292/images/headshots/c/c8553f96_mlbam.jpg',
        },
        { 
          firstname: 'DJ',
          lastname: 'LeMahieu',
          position: '2B',
          image: 'https://d3k2oh6evki4b7.cloudfront.net/req/201810292/images/headshots/0/07868aab_mlbam.jpg',
        },
        { 
          firstname: 'Ian',
          lastname: 'Desmond',
          position: '1B',
          image: 'https://d3k2oh6evki4b7.cloudfront.net/req/201810292/images/headshots/c/cd20433d_mlbam.jpg',
        },
        { 
          firstname: 'Ryan',
          lastname: 'McMahon',
          position: '2B',
          image: 'https://d3k2oh6evki4b7.cloudfront.net/req/201810292/images/headshots/6/6731e251_mlbam.jpg',
        },
        { 
          firstname: 'Pat',
          lastname: 'Valaika',
          position: 'OF',
          image: 'https://d3k2oh6evki4b7.cloudfront.net/req/201810292/images/headshots/e/e0644735_mlbam.jpg',
        },
        { 
          firstname: 'Charlie',
          lastname: 'Blackmon',
          position: 'OF',
          image: 'https://d3k2oh6evki4b7.cloudfront.net/req/201810292/images/headshots/1/12154e57_mlbam.jpg',
        },
        { 
          firstname: 'Carlos',
          lastname: 'Gonzales',
          position: 'OF',
          image: 'https://d3k2oh6evki4b7.cloudfront.net/req/201810292/images/headshots/4/4b177c4a_mlbam.jpg',
        },
        { 
          firstname: 'David',
          lastname: 'Dahl',
          position: 'OF',
          image: 'https://d3k2oh6evki4b7.cloudfront.net/req/201810292/images/headshots/6/6f9ae0cb_mlbam.jpg',
        },
        { 
          firstname: 'Gerardo',
          lastname: 'Parra',
          position: 'OF',
          image: 'https://d3k2oh6evki4b7.cloudfront.net/req/201810292/images/headshots/d/d86f5cd5_mlbam.jpg',
        }
      ]);
    })
}



