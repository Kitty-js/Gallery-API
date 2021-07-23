import { connect } from "mongoose";

export async function startConnection() {
  await connect("mongodb://localhost/gallery-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  console.log("DB is connected");
}
