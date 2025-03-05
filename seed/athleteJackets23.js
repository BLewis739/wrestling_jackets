// How to seed new files in the future
//

// The best strategy seems to be just making a new database each year,
// then seeding it with the jacket data for that year. The new jacket
// data will need to be entered in a .csv file that can then be processed
// by the Python file. The Python file is called text-generator.py and
// lives in the jacket-design folder inside Misc in the Wrestling - Excel
// Dropbox folder.

// Enter the new data into a .csv file. The .csv file is jacket-info
// and can be found in jacket-design in the Misc folder of Excel Wrestling.
//
// Run the text-generator.py in its own terminal window to create
// a new .txt file. ***CHANGE THE NAME OF THE FILE WITH THE NEW YEAR***
// This .txt file can then be copied into a seed file. You can run the
// Python file by going to Run -> Start Debugging (F5) in VSCode. If
// it doesn't run, the Python extension may need to be updated in VSCode,
// then VSCode needs to be restarted. Also, it can be run in IDLE.
// The majority of the text can be copy/pasted. Compare to an existing
// seed file to make small changes.

// Next, create a new database and new seed file to populate it. Making a
// new database is easy. Simply go to the index.js file in /db and
// change the numbers at the end of line 9. It is the connection string
// to a MongoDB database. For example, if it currently said: 'mongodb://127.0.0.1:27017/jacketsDatabase23'
// then change the 23 to a 24. Then, do npm run start in the terminal
// while in the folder wrestling_jackets. MongoDB will create the database
// if it doesn't already exist. ***Here so far, database is made

// Now, create the new seed file in the /seed folder. Copy in the whole .txt
// file. Make changes as necessary. The seed file can then be run to seed the database
// by running node seed/athleteJackets23 in the terminal. After it runs,
// you need to close the database using CTRL + C in the terminal.

// Now the data is seeded and should appear in the client when running npm run start.
// Make sure to cd into the client folder, then run npm run start. You
// also need npm run start running in the wrestling_jackets main folder so
// that the database is connected.

// If you need to adjust any of the formatting, use the App.css file
// which is located in the src folder. Sometimes there are issues with
// fitting the right text on one line, so adjustments can be made there.

// In Feb 2024, the program was altered to include awards over 5, and
// so far Juan is the only wrestler where this came up. Format considerations
// should be made for future wrestlers earning more than 10 awards.

// If a jacketsDatabase is made incorrectly, it can be deleted using the
// MongoDB extension. Open MongoDB by clicking the leaf. Make sure it
// is connected using the connection string (provided above). Right click
// it and select Drop Database to delete it.

const db = require('../db')
const { Athlete, Jacket, Order } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const order1 = await new Order({
    orderNum: 1,
    openOrder: true,
    athletes: []
  })

  const order2 = await new Order({
    orderNum: 2,
    openOrder: true,
    athletes: []
  })

  const order3 = await new Order({
    orderNum: 3,
    openOrder: true,
    athletes: []
  })

  order1.save()
  order2.save()
  order3.save()

  const orders = []
  const athletes = []
  const jackets = []

  const athlete1 = await new Athlete({
    name: 'Outtman Eddahbi',
    abbrevName: 'O. Eddahbi'
  })
  athlete1.save()
  const jacket1 = await new Jacket({
    athlete: athlete1._id,
    emptyStars: 0,
    fullStars: 2,
    role: '',
    award1: '2022 D3N 106 5th',
    award2: '2023 D3N 113 3rd',
    award3: '2023 D3 States 113 7th Place',
    award4: '',
    award5: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket1)

  const athlete2 = await new Athlete({
    name: 'Gerard Escobar',
    abbrevName: 'G. Escobar'
  })
  athlete2.save()
  const jacket2 = await new Jacket({
    athlete: athlete2._id,
    emptyStars: 1,
    fullStars: 0,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket2)

  const athlete3 = await new Athlete({
    name: 'Juan Murillo',
    abbrevName: 'J. Murillo'
  })
  athlete3.save()
  const jacket3 = await new Jacket({
    athlete: athlete3._id,
    emptyStars: 0,
    fullStars: 2,
    role: '',
    award1: '2022 D3N 113 6th',
    award2: '2023 D3N 120 3rd',
    award3: 'CF 22-23',
    award4: '',
    award5: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket3)

  const athlete4 = await new Athlete({
    name: 'Benji Dejesus',
    abbrevName: 'B. Dejesus'
  })
  athlete4.save()
  const jacket4 = await new Jacket({
    athlete: athlete4._id,
    emptyStars: 1,
    fullStars: 0,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket4)

  const athlete5 = await new Athlete({
    name: 'Jefferson Gomez',
    abbrevName: 'J. Gomez'
  })
  athlete5.save()
  const jacket5 = await new Jacket({
    athlete: athlete5._id,
    emptyStars: 1,
    fullStars: 0,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket5)

  const athlete6 = await new Athlete({
    name: 'Rodrigo Ajtun',
    abbrevName: 'R. Ajtun'
  })
  athlete6.save()
  const jacket6 = await new Jacket({
    athlete: athlete6._id,
    emptyStars: 1,
    fullStars: 0,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket6)

  const athlete7 = await new Athlete({
    name: 'Charles Hoffens',
    abbrevName: 'C. Hoffens'
  })
  athlete7.save()
  const jacket7 = await new Jacket({
    athlete: athlete7._id,
    emptyStars: 1,
    fullStars: 1,
    role: '',
    award1: '2023 D3N 126 6th',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket7)

  const athlete8 = await new Athlete({
    name: 'Bryan Ayala',
    abbrevName: 'B. Ayala'
  })
  athlete8.save()
  const jacket8 = await new Jacket({
    athlete: athlete8._id,
    emptyStars: 0,
    fullStars: 3,
    role: 'Capt.',
    award1: 'MI 19-20',
    award2: '2020 D3N 106 3rd',
    award3: '2022 Cohasset Inv Champion 120',
    award4: '2023 D3N 132 6th',
    award5: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket8)

  const athlete9 = await new Athlete({
    name: 'Aaron Melendez',
    abbrevName: 'A. Melendez'
  })
  athlete9.save()
  const jacket9 = await new Jacket({
    athlete: athlete9._id,
    emptyStars: 1,
    fullStars: 0,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket9)

  const athlete10 = await new Athlete({
    name: 'John Forbes',
    abbrevName: 'J. Forbes'
  })
  athlete10.save()
  const jacket10 = await new Jacket({
    athlete: athlete10._id,
    emptyStars: 2,
    fullStars: 0,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket10)

  const athlete11 = await new Athlete({
    name: 'Anthony Bitencourt',
    abbrevName: 'A. Bitencourt'
  })
  athlete11.save()
  const jacket11 = await new Jacket({
    athlete: athlete11._id,
    emptyStars: 1,
    fullStars: 1,
    role: '',
    award1: '2023 D3N 145 6th',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket11)

  const athlete12 = await new Athlete({
    name: 'Jaime Nunez',
    abbrevName: 'J. Nunez'
  })
  athlete12.save()
  const jacket12 = await new Jacket({
    athlete: athlete12._id,
    emptyStars: 1,
    fullStars: 3,
    role: 'Capt.',
    award1: '2023 D3N 138 5th',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket12)

  const athlete13 = await new Athlete({
    name: 'Ethan Martinez',
    abbrevName: 'E. Martinez'
  })
  athlete13.save()
  const jacket13 = await new Jacket({
    athlete: athlete13._id,
    emptyStars: 1,
    fullStars: 0,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket13)

  const athlete14 = await new Athlete({
    name: 'Samy Legzouli',
    abbrevName: 'S. Legzouli'
  })
  athlete14.save()
  const jacket14 = await new Jacket({
    athlete: athlete14._id,
    emptyStars: 1,
    fullStars: 0,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket14)

  const athlete15 = await new Athlete({
    name: 'Jalen Vega',
    abbrevName: 'J. Vega'
  })
  athlete15.save()
  const jacket15 = await new Jacket({
    athlete: athlete15._id,
    emptyStars: 1,
    fullStars: 0,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket15)

  const athlete16 = await new Athlete({
    name: 'Luke Etheridge',
    abbrevName: 'L. Etheridge'
  })
  athlete16.save()
  const jacket16 = await new Jacket({
    athlete: athlete16._id,
    emptyStars: 1,
    fullStars: 2,
    role: 'Capt.',
    award1: '2022 D3N 138 2nd',
    award2: 'HB 21-22',
    award3: '2022 Sandwich Champion 152 lbs',
    award4: '2023 D3N 152 6th',
    award5: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket16)

  const athlete17 = await new Athlete({
    name: 'Rafael Maya',
    abbrevName: 'R. Maya'
  })
  athlete17.save()
  const jacket17 = await new Jacket({
    athlete: athlete17._id,
    emptyStars: 0,
    fullStars: 2,
    role: '',
    award1: 'MI 21-22',
    award2: '2023 D3N 160 3rd',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket17)

  const athlete18 = await new Athlete({
    name: 'Emilio Passariello',
    abbrevName: 'E. Passariello'
  })
  athlete18.save()
  const jacket18 = await new Jacket({
    athlete: athlete18._id,
    emptyStars: 0,
    fullStars: 1,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket18)

  const athlete19 = await new Athlete({
    name: 'Joaquin Espana Lux',
    abbrevName: 'J. Espana Lux'
  })
  athlete19.save()
  const jacket19 = await new Jacket({
    athlete: athlete19._id,
    emptyStars: 1,
    fullStars: 0,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket19)

  const athlete20 = await new Athlete({
    name: 'Anthony Lopez',
    abbrevName: 'A. Lopez'
  })
  athlete20.save()
  const jacket20 = await new Jacket({
    athlete: athlete20._id,
    emptyStars: 1,
    fullStars: 0,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket20)

  const athlete21 = await new Athlete({
    name: 'Sam Page',
    abbrevName: 'S. Page'
  })
  athlete21.save()
  const jacket21 = await new Jacket({
    athlete: athlete21._id,
    emptyStars: 1,
    fullStars: 0,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket21)

  const athlete22 = await new Athlete({
    name: 'Kevin Tabares',
    abbrevName: 'K. Tabares'
  })
  athlete22.save()
  const jacket22 = await new Jacket({
    athlete: athlete22._id,
    emptyStars: 1,
    fullStars: 0,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket22)

  const athlete23 = await new Athlete({
    name: 'Sam Quinonez',
    abbrevName: 'S. Quinonez'
  })
  athlete23.save()
  const jacket23 = await new Jacket({
    athlete: athlete23._id,
    emptyStars: 2,
    fullStars: 0,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket23)

  const athlete24 = await new Athlete({
    name: 'Carlos Rodriguez',
    abbrevName: 'C. Rodriguez'
  })
  athlete24.save()
  const jacket24 = await new Jacket({
    athlete: athlete24._id,
    emptyStars: 0,
    fullStars: 1,
    role: '',
    award1: 'MI 22-23',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket24)

  const athlete25 = await new Athlete({
    name: 'Christian Calderon',
    abbrevName: 'C. Calderon'
  })
  athlete25.save()
  const jacket25 = await new Jacket({
    athlete: athlete25._id,
    emptyStars: 1,
    fullStars: 2,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket25)

  const athlete26 = await new Athlete({
    name: 'Shondel Jenkins',
    abbrevName: 'S. Jenkins'
  })
  athlete26.save()
  const jacket26 = await new Jacket({
    athlete: athlete26._id,
    emptyStars: 1,
    fullStars: 0,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket26)

  const athlete27 = await new Athlete({
    name: 'Christian Dominguez',
    abbrevName: 'C. Dominguez'
  })
  athlete27.save()
  const jacket27 = await new Jacket({
    athlete: athlete27._id,
    emptyStars: 1,
    fullStars: 0,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket27)

  const athlete28 = await new Athlete({
    name: 'Tenny Dwyer',
    abbrevName: 'T. Dwyer'
  })
  athlete28.save()
  const jacket28 = await new Jacket({
    athlete: athlete28._id,
    emptyStars: 1,
    fullStars: 2,
    role: '',
    award1: '2022 D3N 220 5th',
    award2: '2023 D3N 195 4th',
    award3: '2023 D3 States 195 7th Place',
    award4: 'HB 22-23',
    award5: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket28)

  const athlete29 = await new Athlete({
    name: 'Jaden Richemond',
    abbrevName: 'J. Richemond'
  })
  athlete29.save()
  const jacket29 = await new Jacket({
    athlete: athlete29._id,
    emptyStars: 1,
    fullStars: 2,
    role: 'Capt.',
    award1: 'CF 21-22',
    award2: '2022 Sandwich Champion 220 lbs',
    award3: '2023 D3N 220 5th',
    award4: '',
    award5: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket29)

  const athlete30 = await new Athlete({
    name: 'Rafael Rivas',
    abbrevName: 'R. Rivas'
  })
  athlete30.save()
  const jacket30 = await new Jacket({
    athlete: athlete30._id,
    emptyStars: 1,
    fullStars: 0,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket30)

  const athlete31 = await new Athlete({
    name: 'Billy Sullivan',
    abbrevName: 'B. Sullivan'
  })
  athlete31.save()
  const jacket31 = await new Jacket({
    athlete: athlete31._id,
    emptyStars: 0,
    fullStars: 3,
    role: 'Capt.',
    award1: 'WP 21-22',
    award2: '2022 Cohasset Inv Champion 285',
    award3: '2023 D3N 285 2nd',
    award4: '2023 D3 States 285 2nd Place',
    award5: 'MVP 22-23',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket31)

  const athlete32 = await new Athlete({
    name: 'Luis Rodriguez',
    abbrevName: 'L. Rodriguez'
  })
  athlete32.save()
  const jacket32 = await new Jacket({
    athlete: athlete32._id,
    emptyStars: 1,
    fullStars: 0,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket32)

  const athlete33 = await new Athlete({
    name: 'Christian Espana',
    abbrevName: 'C. Espana'
  })
  athlete33.save()
  const jacket33 = await new Jacket({
    athlete: athlete33._id,
    emptyStars: 2,
    fullStars: 0,
    role: 'Manager',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket33)

  const athlete34 = await new Athlete({
    name: 'Lici Sanchez',
    abbrevName: 'L. Sanchez'
  })
  athlete34.save()
  const jacket34 = await new Jacket({
    athlete: athlete34._id,
    emptyStars: 0,
    fullStars: 1,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket34)

  const athlete35 = await new Athlete({
    name: 'Safiyyah Haddi',
    abbrevName: 'S. Haddi'
  })
  athlete35.save()
  const jacket35 = await new Jacket({
    athlete: athlete35._id,
    emptyStars: 0,
    fullStars: 1,
    role: '',
    award1: 'WP 22-23',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket35)

  const athlete36 = await new Athlete({
    name: 'Gina Forbes',
    abbrevName: 'G. Forbes'
  })
  athlete36.save()
  const jacket36 = await new Jacket({
    athlete: athlete36._id,
    emptyStars: 0,
    fullStars: 1,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order3._id
  })
  jackets.push(jacket36)

  const jacket37 = await new Jacket({
    athlete: athlete8._id,
    emptyStars: 0,
    fullStars: 2,
    role: '',
    award1: 'MI 19-20',
    award2: '2020 D3N 106 3rd',
    award3: '2022 Cohasset Inv Champion 120',
    award4: '',
    award5: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order2._id
  })
  jackets.push(jacket37)

  const jacket38 = await new Jacket({
    athlete: athlete28._id,
    emptyStars: 1,
    fullStars: 2,
    role: 'Capt.',
    award1: '2022 D3N 220 5th',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order2._id
  })
  jackets.push(jacket38)

  const jacket39 = await new Jacket({
    athlete: athlete16._id,
    emptyStars: 1,
    fullStars: 1,
    role: 'Capt.',
    award1: '2022 D3N 138 2nd',
    award2: 'HB 21-22',
    award3: '2022 Sandwich Champion 152 lbs',
    award4: '',
    award5: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order2._id
  })
  jackets.push(jacket39)

  const jacket40 = await new Jacket({
    athlete: athlete29._id,
    emptyStars: 1,
    fullStars: 2,
    role: 'Capt.',
    award1: 'CF 21-22',
    award2: '2022 Sandwich Champion 220 lbs',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order2._id
  })
  jackets.push(jacket40)

  const jacket41 = await new Jacket({
    athlete: athlete25._id,
    emptyStars: 1,
    fullStars: 1,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order2._id
  })
  jackets.push(jacket41)

  const jacket42 = await new Jacket({
    athlete: athlete17._id,
    emptyStars: 0,
    fullStars: 1,
    role: '',
    award1: 'MI 21-22',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order2._id
  })
  jackets.push(jacket42)

  const jacket43 = await new Jacket({
    athlete: athlete1._id,
    emptyStars: 0,
    fullStars: 1,
    role: '',
    award1: '2022 D3N 106 5th',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order2._id
  })
  jackets.push(jacket43)

  const jacket44 = await new Jacket({
    athlete: athlete3._id,
    emptyStars: 0,
    fullStars: 1,
    role: '',
    award1: '2022 D3N 113 6th',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order2._id
  })
  jackets.push(jacket44)

  const jacket45 = await new Jacket({
    athlete: athlete23._id,
    emptyStars: 1,
    fullStars: 0,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order2._id
  })
  jackets.push(jacket45)

  const jacket46 = await new Jacket({
    athlete: athlete11._id,
    emptyStars: 1,
    fullStars: 0,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order2._id
  })
  jackets.push(jacket46)

  await Jacket.insertMany(jackets)
  console.log('Created Jackets, Athletes, and Orders')
}
const run = async () => {
  await main()
  //db.close()
}
run()
