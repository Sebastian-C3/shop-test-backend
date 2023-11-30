const admin = (req, res) => {
    res.render('admin/admin')
}

const createGet = (req, res) => {
    res.render('admin/create')
}

const createPost = (req, res) => {
    res.send('Elemento creado')
}

const editGet = (req, res) => {
    res.render('admin/edit')
}

const editPut = (req, res) => {
    res.send('Elemento modificado')
}

const destroy = (req, res) => {
    res.send('Elemento eliminado')
}



module.exports = {
    admin,
    createGet,
    createPost,
    editGet,
    editPut,
    destroy,
};