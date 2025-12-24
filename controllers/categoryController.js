import db from "../config/db.js";

//1 menampilkan data dari tabel
//sql ? SELECT * FROM users
export const getCategory = (req, res) => {
    db.query("SELECT * FROM categories", (err, results) =>{
        //jika ada error
        if (err) res.status(500).json ({message:err});

        //jika berhasil
        res.json(results);
    });
};

//2 menymimpan data
//sql ? INSERT INTO users (name,email,password) values (?,?,?)
export const insertCategory = (req,res) => {
    const {name} = req.body;

    db.query(
        "INSERT INTO categories (name) VALUES (?)",
        [name],
        (err, results) => {
            //jika ada eror
            if (err) res.status(500).json({message: err});

            //jika berhasil
            res.json({message: "Data berhasil disimpan"})
        }
    );
};

//3 menampilkan data berdasarkan id
//sql ? SELECT * FROM users WHERE id=?
export const showCategory = (req,res) => {
    const {id} = req.params;

    db.query("SELECT * FROM categories WHERE category_id=?", [id], (err, results) => {
        //jika ada eror
        if(err) res.status(500).json({message: err});

        //jika tidak ditemukan(
        if(results.length === 0){
            return res.status(400).json({message: "Category tidak ditemukan"});
        }

        //jika ditemukan
        res.json(results[0]);
    });
}

//4 update data berdasarkan id
//sql ? UPDATE users SET name=?, eamil=?, password=?
export const updateCategory = (req,res) => {
    const {id} = req.params;
    const {name} = req.body;

    db.query("UPDATE categories SET name=? WHERE category_id=?",
        [name, id],
        (err, results) => {
            //jika ada error
            if (err) res.status(500).json ({message: err});

            //jika berhasil
            res.json({message: "Data berhasil diupdate"})
    });
};

//5 delete data berdasarkan id
//sql? DELETE FROM users WHERE id=?
export const deleteCategory = (req,res) => {
    const {id} = req.params;
    
    //jika ada eror
    db.query("DELETE FROM categories WHERE category_id=?", [id], (err, results) => {
            if (err) res.status(500).json({message: err});

            //jika behasil
            res.json({message: "Data berhasil dihapus"});
    });
};