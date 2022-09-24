
module.exports = mongoose => {
  const Transaksi = mongoose.model(
    "transaksi",
    mongoose.Schema(
      {
        nama_pengeluaran: String,
        total_pengeluaran : String,
        tanggal: { type: Date, default: Date.now },
      },
    )
  );
  return Transaksi;
};
