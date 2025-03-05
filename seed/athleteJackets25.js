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

  const order4 = await new Order({
    orderNum: 4,
    openOrder: true,
    athletes: []
  })

  const order5 = await new Order({
    orderNum: 5,
    openOrder: true,
    athletes: []
  })

  order1.save()
  order2.save()
  order3.save()
  order4.save()
  order5.save()

  const orders = []
  const athletes = []
  const jackets = []

  //Paste .txt file here in place of athlete1 to last athlete.

  const athlete1 = await new Athlete({
    name: 'Andrew Chevez',
    abbrevName: 'A. Chevez'
  })
  athlete1.save()
  const jacket1 = await new Jacket({
    athlete: athlete1._id,
    emptyStars: 0,
    fullStars: 2,
    role: '',
    award1: '2024 D3N 106 5th',
    award2: '2024 Sandwich Champion 113',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order5._id
  })
  jackets.push(jacket1)

  const athlete2 = await new Athlete({
    name: 'Alvis Tejeda',
    abbrevName: 'A. Tejeda'
  })
  athlete2.save()
  const jacket2 = await new Jacket({
    athlete: athlete2._id,
    emptyStars: 0,
    fullStars: 2,
    role: '',
    award1: '2024 D3N 113 5th',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order5._id
  })
  jackets.push(jacket2)

  const athlete3 = await new Athlete({
    name: 'Safiyyah Haddi',
    abbrevName: 'S. Haddi'
  })
  athlete3.save()
  const jacket3 = await new Jacket({
    athlete: athlete3._id,
    emptyStars: 0,
    fullStars: 3,
    role: 'Capt.',
    award1: 'WP 22-23',
    award2: '2025 D3 States 120 4th',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order5._id
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
    fullStars: 2,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order5._id
  })
  jackets.push(jacket4)

  const athlete5 = await new Athlete({
    name: 'Juan Murillo',
    abbrevName: 'J. Murillo'
  })
  athlete5.save()
  const jacket5 = await new Jacket({
    athlete: athlete5._id,
    emptyStars: 0,
    fullStars: 4,
    role: 'Capt.',
    award1: '2022 D3N 113 6th',
    award2: '2023 D3N 120 3rd',
    award3: 'CF 22-23',
    award4: '2023 Sandwich Champion 126',
    award5: '2024 Cohasset Inv Champion 126',
    award6: '2024 D3N 126 2nd',
    award7: '2024 D3 States 3rd',
    award8: 'MVP and CF 23-24',
    award9: '2024 Sandwich Champion 132',
    award10: '2025 D3N 132 2nd',
    award11: '2025 D3 States 132 4th',
    award12: '100 Win Club',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order5._id
  })
  jackets.push(jacket5)

  const athlete6 = await new Athlete({
    name: 'Outtman Eddahbi',
    abbrevName: 'O. Eddahbi'
  })
  await athlete6.save()
  const jacket6 = await new Jacket({
    athlete: athlete6._id,
    emptyStars: 0,
    fullStars: 3,
    role: 'Capt.',
    award1: '2022 D3N 106 5th',
    award2: '2023 D3N 113 3rd',
    award3: '2023 D3 States 113 7th',
    award4: '2023 Sandwich Champion 132',
    award5: '2025 Nashua South Champion 126',
    award6: '2025 Cohasset Inv Champion 126',
    award7: '2025 D3N 126 4th',
    award8: '2025 D3 States 126 5th',
    award9: 'HB 24-25',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order5._id
  })
  jackets.push(jacket6)

  const athlete7 = await new Athlete({
    name: 'Omar Raoui',
    abbrevName: 'O. Raoui'
  })
  athlete7.save()
  const jacket7 = await new Jacket({
    athlete: athlete7._id,
    emptyStars: 1,
    fullStars: 1,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order5._id
  })
  jackets.push(jacket7)

  const athlete8 = await new Athlete({
    name: 'Anthony Bitencourt',
    abbrevName: 'A. Bitencourt'
  })
  athlete8.save()
  const jacket8 = await new Jacket({
    athlete: athlete8._id,
    emptyStars: 1,
    fullStars: 3,
    role: '',
    award1: '2023 D3N 145 6th',
    award2: '2025 D3N 138 4th',
    award3: 'HB 24-25',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order5._id
  })
  jackets.push(jacket8)

  const athlete9 = await new Athlete({
    name: 'Bahadeen Legzouli',
    abbrevName: 'B. Legzouli'
  })
  athlete9.save()
  const jacket9 = await new Jacket({
    athlete: athlete9._id,
    emptyStars: 0,
    fullStars: 2,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order5._id
  })
  jackets.push(jacket9)

  const athlete10 = await new Athlete({
    name: 'Jalen Vega',
    abbrevName: 'J. Vega'
  })
  athlete10.save()
  const jacket10 = await new Jacket({
    athlete: athlete10._id,
    emptyStars: 1,
    fullStars: 2,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order5._id
  })
  jackets.push(jacket10)

  const athlete11 = await new Athlete({
    name: 'Adam Cheref',
    abbrevName: 'A. Cheref'
  })
  athlete11.save()
  const jacket11 = await new Jacket({
    athlete: athlete11._id,
    emptyStars: 1,
    fullStars: 1,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order5._id
  })
  jackets.push(jacket11)

  const athlete12 = await new Athlete({
    name: 'Ethan Martinez',
    abbrevName: 'E. Martinez'
  })
  await athlete12.save()
  const jacket12 = await new Jacket({
    athlete: athlete12._id,
    emptyStars: 1,
    fullStars: 2,
    role: 'Capt.',
    award1: 'HB 23-24',
    award2: '2024 Sandwich Champion 157',
    award3: '2025 D3N 157 4th',
    award4: '2025 D3 States 157 7th',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order5._id
  })
  jackets.push(jacket12)

  const athlete13 = await new Athlete({
    name: 'Rafael Maya',
    abbrevName: 'R. Maya'
  })
  athlete13.save()
  const jacket13 = await new Jacket({
    athlete: athlete13._id,
    emptyStars: 0,
    fullStars: 4,
    role: 'Capt.',
    award1: 'MI 21-22',
    award2: '2023 D3N 160 3rd',
    award3: '2023 Sandwich Champion 175',
    award4: '2024 D3N 175 3rd',
    award5: '2024 D3 States 175 8th',
    award6: '2024 Wilm Sons Champion 175 OW',
    award7: '2024 Sandwich Champion 175',
    award8: '2025 D3N 175 Champion',
    award9: '2025 D3 States 175 5th',
    award10: '100 Win Club',
    award11: 'MVP 24-25',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order5._id
  })
  jackets.push(jacket13)

  const athlete14 = await new Athlete({
    name: 'Kevin Tabares',
    abbrevName: 'K. Tabares'
  })
  athlete14.save()
  const jacket14 = await new Jacket({
    athlete: athlete14._id,
    emptyStars: 2,
    fullStars: 2,
    role: '',
    award1: 'WP 23-24',
    award2: '2025 D3N 144 4th',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order5._id
  })
  jackets.push(jacket14)

  const athlete15 = await new Athlete({
    name: 'Pedro Roche',
    abbrevName: 'P. Roche'
  })
  athlete15.save()
  const jacket15 = await new Jacket({
    athlete: athlete15._id,
    emptyStars: 2,
    fullStars: 0,
    role: '',
    award1: 'WP 24-25',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order5._id
  })
  jackets.push(jacket15)

  const athlete16 = await new Athlete({
    name: 'Jared Dubon',
    abbrevName: 'J. Dubon'
  })
  athlete16.save()
  const jacket16 = await new Jacket({
    athlete: athlete16._id,
    emptyStars: 2,
    fullStars: 0,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order5._id
  })
  jackets.push(jacket16)

  const athlete17 = await new Athlete({
    name: 'Rami Lakehal',
    abbrevName: 'R. Lakehal'
  })
  athlete17.save()
  const jacket17 = await new Jacket({
    athlete: athlete17._id,
    emptyStars: 0,
    fullStars: 2,
    role: '',
    award1: '2024 D3N 215 5th',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: false,
    orderNum: order5._id
  })
  jackets.push(jacket17)

  const athlete18 = await new Athlete({
    name: 'Sam Carcamo',
    abbrevName: 'S. Carcamo'
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
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order5._id
  })
  jackets.push(jacket18)

  const athlete19 = await new Athlete({
    name: 'Sarah Bouchdamene',
    abbrevName: 'S. Bouchdamene'
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
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order5._id
  })
  jackets.push(jacket19)

  const athlete20 = await new Athlete({
    name: 'Nathaly Reyes Cruz',
    abbrevName: 'N. Reyes Cruz'
  })
  athlete20.save()
  const jacket20 = await new Jacket({
    athlete: athlete20._id,
    emptyStars: 0,
    fullStars: 1,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order5._id
  })
  jackets.push(jacket20)

  const athlete21 = await new Athlete({
    name: 'Naomi Herrera',
    abbrevName: 'N. Herrera'
  })
  athlete21.save()
  const jacket21 = await new Jacket({
    athlete: athlete21._id,
    emptyStars: 0,
    fullStars: 1,
    role: '',
    award1: '2025 D3 States 145 4th',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order5._id
  })
  jackets.push(jacket21)

  const athlete22 = await new Athlete({
    name: 'Gen Andrade',
    abbrevName: 'G. Andrade'
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
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order5._id
  })
  jackets.push(jacket22)

  const athlete23 = await new Athlete({
    name: 'Monica Santos',
    abbrevName: 'M. Santos'
  })
  athlete23.save()
  const jacket23 = await new Jacket({
    athlete: athlete23._id,
    emptyStars: 0,
    fullStars: 1,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order5._id
  })
  jackets.push(jacket23)

  const athlete24 = await new Athlete({
    name: 'Elias Chevez',
    abbrevName: 'E. Chevez'
  })
  athlete24.save()
  const jacket24 = await new Jacket({
    athlete: athlete24._id,
    emptyStars: 0,
    fullStars: 1,
    role: '',
    award1: '2024 Sandwich Champion 106',
    award2: '2025 Cohasset Inv Champion 106',
    award3: 'MI 24-25',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order5._id
  })
  jackets.push(jacket24)

  const athlete25 = await new Athlete({
    name: 'Josh Botzoc',
    abbrevName: 'J. Botzoc'
  })
  athlete25.save()
  const jacket25 = await new Jacket({
    athlete: athlete25._id,
    emptyStars: 1,
    fullStars: 0,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order5._id
  })
  jackets.push(jacket25)

  const athlete26 = await new Athlete({
    name: 'Julian Vargas',
    abbrevName: 'J. Vargas'
  })
  await athlete26.save()
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
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order5._id
  })
  jackets.push(jacket26)

  const athlete27 = await new Athlete({
    name: 'Giordani Alvarado Cortez',
    abbrevName: 'G. Alvarado Cortez'
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
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order5._id
  })
  jackets.push(jacket27)

  const athlete28 = await new Athlete({
    name: 'Juan Ochoa',
    abbrevName: 'J. Ochoa'
  })
  athlete28.save()
  const jacket28 = await new Jacket({
    athlete: athlete28._id,
    emptyStars: 0,
    fullStars: 1,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order5._id
  })
  jackets.push(jacket28)

  const athlete29 = await new Athlete({
    name: 'Carlos Campos',
    abbrevName: 'C. Campos'
  })
  await athlete29.save()
  const jacket29 = await new Jacket({
    athlete: athlete29._id,
    emptyStars: 0,
    fullStars: 1,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: true,
    isBeforeJacket: false,
    orderNum: order5._id
  })
  jackets.push(jacket29)

  const jacket30 = await new Jacket({
    athlete: athlete1._id,
    emptyStars: 0,
    fullStars: 1,
    role: '',
    award1: '2024 D3N 106 5th',
    award2: 'MI 23-24',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: true,
    orderNum: order4._id
  })
  jackets.push(jacket30)

  const jacket31 = await new Jacket({
    athlete: athlete2._id,
    emptyStars: 0,
    fullStars: 1,
    role: '',
    award1: '2024 D3N 113 5th',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: true,
    orderNum: order4._id
  })
  jackets.push(jacket31)

  const jacket32 = await new Jacket({
    athlete: athlete3._id,
    emptyStars: 0,
    fullStars: 2,
    role: '',
    award1: 'WP 22-23',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: true,
    orderNum: order4._id
  })
  jackets.push(jacket32)

  const jacket33 = await new Jacket({
    athlete: athlete4._id,
    emptyStars: 1,
    fullStars: 1,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: true,
    orderNum: order4._id
  })
  jackets.push(jacket33)

  const jacket34 = await new Jacket({
    athlete: athlete5._id,
    emptyStars: 0,
    fullStars: 3,
    role: 'Capt.',
    award1: '2022 D3N 113 6th',
    award2: '2023 D3N 120 3rd',
    award3: 'CF 22-23',
    award4: '2023 Sandwich Champion 126',
    award5: '2024 Cohasset Inv Champion 126',
    award6: '2024 D3N 126 2nd',
    award7: '2024 D3 States 3rd',
    award8: 'MVP and CF 23-24',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: true,
    orderNum: order4._id
  })
  jackets.push(jacket34)

  const jacket35 = await new Jacket({
    athlete: athlete6._id,
    emptyStars: 0,
    fullStars: 2,
    role: '',
    award1: '2022 D3N 106 5th',
    award2: '2023 D3N 113 3rd',
    award3: '2023 D3 States 113 7th',
    award4: '2023 Sandwich Champion 132',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: true,
    orderNum: order4._id
  })
  jackets.push(jacket35)

  const jacket36 = await new Jacket({
    athlete: athlete7._id,
    emptyStars: 1,
    fullStars: 0,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: true,
    orderNum: order4._id
  })
  jackets.push(jacket36)

  const jacket37 = await new Jacket({
    athlete: athlete8._id,
    emptyStars: 1,
    fullStars: 2,
    role: '',
    award1: '2023 D3N 145 6th',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: true,
    orderNum: order4._id
  })
  jackets.push(jacket37)

  const jacket38 = await new Jacket({
    athlete: athlete9._id,
    emptyStars: 0,
    fullStars: 1,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: true,
    orderNum: order4._id
  })
  jackets.push(jacket38)

  const jacket39 = await new Jacket({
    athlete: athlete10._id,
    emptyStars: 1,
    fullStars: 1,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: true,
    orderNum: order4._id
  })
  jackets.push(jacket39)

  const jacket40 = await new Jacket({
    athlete: athlete11._id,
    emptyStars: 1,
    fullStars: 0,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: true,
    orderNum: order4._id
  })
  jackets.push(jacket40)

  const jacket41 = await new Jacket({
    athlete: athlete12._id,
    emptyStars: 1,
    fullStars: 1,
    role: '',
    award1: 'HB 23-24',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: true,
    orderNum: order4._id
  })
  jackets.push(jacket41)

  const jacket42 = await new Jacket({
    athlete: athlete13._id,
    emptyStars: 0,
    fullStars: 3,
    role: 'Capt.',
    award1: 'MI 21-22',
    award2: '2023 D3N 160 3rd',
    award3: '2023 Sandwich Champion 175',
    award4: '2024 D3N 175 3rd',
    award5: '2024 D3 States 175 8th',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: true,
    orderNum: order4._id
  })
  jackets.push(jacket42)

  const jacket43 = await new Jacket({
    athlete: athlete14._id,
    emptyStars: 2,
    fullStars: 1,
    role: '',
    award1: 'WP 23-24',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: true,
    orderNum: order4._id
  })
  jackets.push(jacket43)

  const jacket44 = await new Jacket({
    athlete: athlete15._id,
    emptyStars: 1,
    fullStars: 0,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: true,
    orderNum: order4._id
  })
  jackets.push(jacket44)

  const jacket45 = await new Jacket({
    athlete: athlete16._id,
    emptyStars: 1,
    fullStars: 0,
    role: '',
    award1: '',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: true,
    orderNum: order4._id
  })
  jackets.push(jacket45)

  const jacket46 = await new Jacket({
    athlete: athlete17._id,
    emptyStars: 0,
    fullStars: 1,
    role: '',
    award1: '2024 D3N 215 5th',
    award2: '',
    award3: '',
    award4: '',
    award5: '',
    award6: '',
    award7: '',
    award8: '',
    award9: '',
    award10: '',
    award11: '',
    award12: '',
    isNewJacket: false,
    isBeforeJacket: true,
    orderNum: order4._id
  })
  jackets.push(jacket46)

  await Jacket.insertMany(jackets)
  console.log('Created Jackets, Athletes, and Orders')
}
const run = async () => {
  await main()
  db.close()
}
run()
