export default (app, es) => {
  app.get('/api/cards', (req, res) => 
    res.status(200).json([{id: "1", name: "card 1"}, {id: "2", name:"card 2"}, {id: '3', name: 'card 3'}])
  )

}