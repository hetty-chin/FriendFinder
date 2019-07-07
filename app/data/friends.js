// ===============================================================================
// DATA
// Below data will hold all of the application's data
// To test things out I have a "dummy" dummy.
// ===============================================================================

var friendArray = [
  {
    'name': 'Retsuko',
    'photo': 'https://s3.amazonaws.com/factmag-images/wp-content/uploads/2017/01/Aggretsuko-01-06-17-616x440.jpg',
    'scores': [
      '5',
      '1',
      '4',
      '4',
      '5',
      '1',
      '2',
      '5',
      '4',
      '1'
    ]
  },
  {
    'name': 'Haida',
    'photo': 'https://i.redd.it/yp9cfi2lmu721.jpg',
    'scores': [
      '1',
      '1',
      '1',
      '1',
      '1',
      '1',
      '1',
      '1',
      '1',
      '1'
    ]
  },
  {
    'name': 'Ton',
    'photo': 'https://cdn.shopify.com/s/files/1/0463/0789/products/1_04026c77-8ae6-4c4c-b2e9-93b97c75eecc_grande.png?v=1525148767',
    'scores': [
      '5',
      '5',
      '5',
      '5',
      '5',
      '5',
      '5',
      '5',
      '5',
      '5'
    ]
  }
]

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray
