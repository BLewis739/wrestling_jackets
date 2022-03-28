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

  const athlete1 = await new Athlete({
    name: 'Bryan Ayala',
    abbrevName: 'B. Ayala'
  })
  athlete1.save()
  const jacket1 = await new Jacket({
    athlete: athlete1._id,
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
  jacket1.save()

  const athlete2 = await new Athlete({
    name: 'Tenny Dwyer',
    abbrevName: 'T. Dwyer'
  })
  athlete2.save()
  const jacket2 = await new Jacket({
    athlete: athlete2._id,
    emptyStars: 1,
    fullStars: 1,
    role: '',
    award1: '2022 D3N 220 5th',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order2._id
  })
  jacket2.save()

  const athlete3 = await new Athlete({ name: 'MTC', abbrevName: 'MTC' })
  athlete3.save()
  const jacket3 = await new Jacket({
    athlete: athlete3._id,
    emptyStars: 0,
    fullStars: 3,
    role: 'Capt.',
    award1: 'WP 19-20',
    award2: '2022 D3N 285 4th',
    award3: 'MVP 21-22',
    award4: '',
    award5: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order2._id
  })
  jacket3.save()

  const athlete4 = await new Athlete({
    name: 'Andrew Flores',
    abbrevName: 'A. Flores'
  })
  athlete4.save()
  const jacket4 = await new Jacket({
    athlete: athlete4._id,
    emptyStars: 0,
    fullStars: 2,
    role: '',
    award1: '2020 D3N 120 6th',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order2._id
  })
  jacket4.save()

  const athlete5 = await new Athlete({
    name: 'Luke Etheridge',
    abbrevName: 'L. Etheridge'
  })
  athlete5.save()
  const jacket5 = await new Jacket({
    athlete: athlete5._id,
    emptyStars: 1,
    fullStars: 1,
    role: 'Capt.',
    award1: '2022 D3N 138 2nd',
    award2: 'HB 21-22',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order2._id
  })
  jacket5.save()

  const athlete6 = await new Athlete({
    name: 'Jaden Richemond',
    abbrevName: 'J. Richemond'
  })
  athlete6.save()
  const jacket6 = await new Jacket({
    athlete: athlete6._id,
    emptyStars: 1,
    fullStars: 1,
    role: '',
    award1: 'CF 21-22',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order2._id
  })
  jacket6.save()

  const athlete7 = await new Athlete({
    name: 'Kevin Caballero',
    abbrevName: 'K. Caballero'
  })
  athlete7.save()
  const jacket7 = await new Jacket({
    athlete: athlete7._id,
    emptyStars: 2,
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
  jacket7.save()

  const athlete8 = await new Athlete({
    name: 'Jaime Nunez',
    abbrevName: 'J. Nunez'
  })
  athlete8.save()
  const jacket8 = await new Jacket({
    athlete: athlete8._id,
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
    orderNum: order2._id
  })
  jacket8.save()

  const athlete9 = await new Athlete({
    name: 'DJ Johnston',
    abbrevName: 'D. Johnston'
  })
  athlete9.save()
  const jacket9 = await new Jacket({
    athlete: athlete9._id,
    emptyStars: 3,
    fullStars: 0,
    role: 'Manager',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order2._id
  })
  jacket9.save()

  const athlete10 = await new Athlete({
    name: 'Christian Calderon',
    abbrevName: 'C. Calderon'
  })
  athlete10.save()
  const jacket10 = await new Jacket({
    athlete: athlete10._id,
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
  jacket10.save()

  const athlete11 = await new Athlete({
    name: 'Natnael Abbayehu',
    abbrevName: 'N. Abbayehu'
  })
  athlete11.save()
  const jacket11 = await new Jacket({
    athlete: athlete11._id,
    emptyStars: 2,
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
  jacket11.save()

  const athlete12 = await new Athlete({
    name: 'Billy Sullivan',
    abbrevName: 'B. Sullivan'
  })
  athlete12.save()
  const jacket12 = await new Jacket({
    athlete: athlete12._id,
    emptyStars: 0,
    fullStars: 2,
    role: '',
    award1: 'WP 22-23',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order2._id
  })
  jacket12.save()

  const athlete13 = await new Athlete({
    name: 'Armando Reyes',
    abbrevName: 'A. Reyes'
  })
  athlete13.save()
  const jacket13 = await new Jacket({
    athlete: athlete13._id,
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
    orderNum: order2._id
  })
  jacket13.save()

  const athlete14 = await new Athlete({
    name: 'Fatima Mancia',
    abbrevName: 'F. Mancia'
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
    orderNum: order2._id
  })
  jacket14.save()

  const athlete15 = await new Athlete({
    name: 'Jonathan Flores',
    abbrevName: 'J. Flores'
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
    orderNum: order2._id
  })
  jacket15.save()

  const athlete16 = await new Athlete({
    name: 'Jonathan Mejia',
    abbrevName: 'J. Mejia'
  })
  athlete16.save()
  const jacket16 = await new Jacket({
    athlete: athlete16._id,
    emptyStars: 1,
    fullStars: 0,
    role: 'Manager',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order2._id
  })
  jacket16.save()

  const athlete17 = await new Athlete({
    name: 'Rafael Maya',
    abbrevName: 'R. Maya'
  })
  athlete17.save()
  const jacket17 = await new Jacket({
    athlete: athlete17._id,
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
    orderNum: order2._id
  })
  jacket17.save()

  const athlete18 = await new Athlete({
    name: 'Outtman Eddahbi',
    abbrevName: 'O. Eddahbi'
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
    orderNum: order2._id
  })
  jacket18.save()

  const athlete19 = await new Athlete({
    name: 'Juan Murillo',
    abbrevName: 'J. Murillo'
  })
  athlete19.save()
  const jacket19 = await new Jacket({
    athlete: athlete19._id,
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
    orderNum: order2._id
  })
  jacket19.save()

  const athlete20 = await new Athlete({
    name: 'Sam Quinonez',
    abbrevName: 'S. Quinonez'
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
    orderNum: order2._id
  })
  jacket20.save()

  const athlete21 = await new Athlete({
    name: 'Anthony Bitencourt',
    abbrevName: 'A. Bitencourt'
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
    orderNum: order2._id
  })
  jacket21.save()

  const athlete22 = await new Athlete({
    name: 'Sohib Charkaoui',
    abbrevName: 'S. Charkaoui'
  })
  athlete22.save()
  const jacket22 = await new Jacket({
    athlete: athlete22._id,
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
    orderNum: order2._id
  })
  jacket22.save()

  const athlete23 = await new Athlete({
    name: 'Yunus Bracaj',
    abbrevName: 'Y. Bracaj'
  })
  athlete23.save()
  const jacket23 = await new Jacket({
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
  jacket23.save()

  const athlete24 = await new Athlete({
    name: 'Asuzena Rojas',
    abbrevName: 'A. Rojas'
  })
  athlete24.save()
  const jacket24 = await new Jacket({
    athlete: athlete24._id,
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
    orderNum: order2._id
  })
  jacket24.save()

  const athlete25 = await new Athlete({
    name: 'Coach Fife',
    abbrevName: 'Coach Fife'
  })
  athlete25.save()
  const jacket25 = await new Jacket({
    athlete: athlete25._id,
    emptyStars: 0,
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
  jacket25.save()

  const athlete26 = await new Athlete({
    name: 'Kevin Caballero',
    abbrevName: 'K. Caballero'
  })
  athlete26.save()
  const jacket26 = await new Jacket({
    athlete: athlete7._id,
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
    orderNum: order1._id
  })
  jacket26.save()

  const athlete27 = await new Athlete({
    name: 'Jaden Richemond',
    abbrevName: 'J. Richemond'
  })
  athlete27.save()
  const jacket27 = await new Jacket({
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
    orderNum: order1._id
  })
  jacket27.save()

  const athlete28 = await new Athlete({
    name: 'Luke Etheridge',
    abbrevName: 'L. Etheridge'
  })
  athlete28.save()
  const jacket28 = await new Jacket({
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
    orderNum: order1._id
  })
  jacket28.save()

  const athlete29 = await new Athlete({
    name: 'Andrew Flores',
    abbrevName: 'A. Flores'
  })
  athlete29.save()
  const jacket29 = await new Jacket({
    athlete: athlete4._id,
    emptyStars: 0,
    fullStars: 2,
    role: '',
    award1: '2020 D3N 120 6th',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order1._id
  })
  jacket29.save()

  const athlete30 = await new Athlete({ name: 'MTC', abbrevName: 'MTC' })
  athlete30.save()
  const jacket30 = await new Jacket({
    athlete: athlete3._id,
    emptyStars: 0,
    fullStars: 2,
    role: 'Capt.',
    award1: 'WP 19-20',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order1._id
  })
  jacket30.save()

  const athlete31 = await new Athlete({
    name: 'Tenny Dwyer',
    abbrevName: 'T. Dwyer'
  })
  athlete31.save()
  const jacket31 = await new Jacket({
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
    orderNum: order1._id
  })
  jacket31.save()

  const athlete32 = await new Athlete({
    name: 'Bryan Ayala',
    abbrevName: 'B. Ayala'
  })
  athlete32.save()
  const jacket32 = await new Jacket({
    athlete: athlete1._id,
    emptyStars: 0,
    fullStars: 1,
    role: '',
    award1: 'MI 19-20',
    award2: '2020 D3N 106 3rd',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order1._id
  })
  jacket32.save()

  const athlete33 = await new Athlete({
    name: 'Billy Sullivan',
    abbrevName: 'B. Sullivan'
  })
  athlete33.save()
  const jacket33 = await new Jacket({
    athlete: athlete12._id,
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
    orderNum: order1._id
  })
  jacket33.save()

  const athlete34 = await new Athlete({
    name: 'Natnael Abbayehu',
    abbrevName: 'N. Abbayehu'
  })
  athlete34.save()
  const jacket34 = await new Jacket({
    athlete: athlete11._id,
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
    orderNum: order1._id
  })
  jacket34.save()

  const athlete35 = await new Athlete({
    name: 'Christian Calderon',
    abbrevName: 'C. Calderon'
  })
  athlete35.save()
  const jacket35 = await new Jacket({
    athlete: athlete10._id,
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
    orderNum: order1._id
  })
  jacket35.save()

  const athlete36 = await new Athlete({
    name: 'DJ Johnston',
    abbrevName: 'D. Johnston'
  })
  athlete36.save()
  const jacket36 = await new Jacket({
    athlete: athlete9._id,
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
    orderNum: order1._id
  })
  jacket36.save()

  const athlete37 = await new Athlete({
    name: 'Jaime Nunez',
    abbrevName: 'J. Nunez'
  })
  athlete37.save()
  const jacket37 = await new Jacket({
    athlete: athlete8._id,
    emptyStars: 1,
    fullStars: 1,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order1._id
  })
  jacket37.save()
}
const run = async () => {
  await main()
  db.close()
}
run()
