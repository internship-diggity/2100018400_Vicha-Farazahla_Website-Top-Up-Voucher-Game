const Nominal = require('./model');

module.exports={
    index: async(req, res)=> {
        try{
            const alertMesssage = req. flash("alertMessage")
            const alertStatus = req.flash("alertStatus")

            const alert = { message: alertMesssage, status: alertStatus}
            const nominal = await Nominal.find()
            const name = req.user ? req.user.name :'Guest';
            
            res.render('admin/nominal/view_nominal', {
                nominal,
                alert,
                name
            })
        } catch (err){
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/category')
        }
    },
    viewCreate : async(req, res)=>{
        try{
            const name = req.user ? req.user.name : 'Guest';
            res.render('admin/nominal/create', {
                name
            })
        } catch (err){
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/category')
        }
    },

    actionCreate : async(req, res)=>{
        try{
            const  {coinName , coinQuantity, price} =req.body
            let nominal = await Nominal ({coinName , coinQuantity, price})
            await nominal.save();

            req.flash('alertMessage', "Berhasil tambah nominal")
            req.flash('alertStatus', "success")
            res.redirect('/nominal')

        } catch (err){
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/nominal')
        }
    },

    viewEdit : async(req, res)=>{
        try{
            const { id } = req.params

            const nominal = await Nominal.findOne({_id: id}) 
            const name = req.user ? req.user.name : 'Guest';
            res.render('admin/nominal/edit', {
                nominal, 
                name
            })

        } catch(err) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/nominal')
        }
    },

    actionEdit : async(req, res)=>{
        try{
            const { id } = req.params;
            const { coinName , coinQuantity, price } = req.body

            await Nominal.findOneAndUpdate({
                _id: id
            }, { coinName , coinQuantity, price });

            req.flash('alertMessage', "Berhasil ubah nominal")
            req.flash('alertStatus', "success")
            res.redirect('/nominal')

        } catch(err) {
            req.flash('alertMessage', `${err.message}`)
            req.flash('alertStatus', 'danger')
            res.redirect('/nominal')
        }
    },

    actionDelete: async(req, res)=> {
    try {
        const { id } = req.params;

        await Nominal.findOneAndDelete({ 
            _id: id 
        }); 

        req.flash('alertMessage', "Berhasil hapus nominal")
        req.flash('alertStatus', "success")
        res.redirect('/nominal');

        
    } catch(err) {
        req.flash('alertMessage', `${err.message}`)
        req.flash('alertStatus', 'danger')
        res.redirect('/nominal')
    }
}

    }    
