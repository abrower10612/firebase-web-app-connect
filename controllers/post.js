const firebase = require('../firebase');

exports.create = (req, res) => {
  try {
    const { title } = req.body;
    if (!title) throw new Error('Missing title')
    const ref = firebase.database().ref('Blog Posts')
    const key = ref.push().key;
    ref.child(key).set({ title })
    res.json({ message: 'Post successfully created' })   
  } catch (err) {
    res.json({ Error: err.message })
  }
}

exports.readAll = (req, res) => {
  try {
    const ref = firebase.database().ref('Blog Posts');
    ref.once('value', (snapshot) => {
      if (!snapshot.exists()) return res.json({ message: "No records found" });
      const posts = [];
      snapshot.forEach((post) => {
        posts.push(post);
      });
      res.json({ posts })
    })
  } catch (err) {
    res.json({ Error: err.message })
  }
}