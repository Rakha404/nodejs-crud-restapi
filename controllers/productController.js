import db from "../config/db.js";

//1 menampilkan data dari tabel
//sql ? SELECT * FROM users
export const getProducts = (req, res) => {
    db.query("SELECT * FROM products", (err, results) =>{
        //jika ada error
        if (err) res.status(500).json ({message:err});

        //jika berhasil
        res.json(results);
    });
};

//2 menymimpan data
//sql ? INSERT INTO users (name,email,password) values (?,?,?)
export const insertPoducts = (req,res) => {
    const {name, price, category_id} = req.body;

    db.query(
        "INSERT INTO products (name, price, category_id) VALUES (?,?,?)",
        [name, price, category_id],
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
export const showProducts = (req,res) => {
    const {id} = req.params;

    db.query("SELECT * FROM products WHERE product_id=?", [id], (err, results) => {
        //jika ada eror
        if(err) res.status(500).json({message: err});

        //jika tidak ditemukan(
        if(results.length === 0){
            return res.status(400).json({message: "Data tidak ditemukan"});
        }

        //jika ditemukan
        res.json(results[0]);
    });
}

//4 update data berdasarkan id
//sql ? UPDATE users SET name=?, eamil=?, password=?
export const updateProducts = (req,res) => {
    const {id} = req.params;
    const {name, price, category_id} = req.body;

    db.query("UPDATE products SET name=?, price=?, category_id=? WHERE product_id=?",
        [name, price, category_id, id],
        (err, results) => {
            //jika ada error
            if (err) res.status(500).json ({message: err});

            //jika berhasil
            res.json({message: "Data berhasil diupdate"})
    });
};

//5 delete data berdasarkan id
//sql? DELETE FROM users WHERE id=?
export const deleteProducts = (req,res) => {
    const {id} = req.params;
    
    //jika ada eror
    db.query("DELETE FROM products WHERE product_id=?", [id], (err, results) => {
            if (err) res.status(500).json({message: err});

            //jika behasil
            res.json({message: "Data berhasil dihapus"});
    });
};