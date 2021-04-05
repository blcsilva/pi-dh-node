module.exports = (sequelize, DataTypes)=>{
const Usuario = sequelize.define('Usuario',{
    id :{type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull:true},
    nome: DataTypes.STRING,
    email: { type: DataTypes.STRING,
    allowNull:false},
    senha: DataTypes.STRING,
    





},{tableName:'usuarios',
timestamps:false})

return Usuario


}

