///api/order/:id
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useReducer } from "react"
import Layout from "../../../components/Layout"
import { getError } from "../../utils/error"
import { getSession } from "next-auth/react"
import Order from "../../../models/Order"
import db from "../../../utils/db"

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: "" }
    case "FETCH_SUCCESS":
      return { ...state, loading: false, error: action.payload }
    default:
      state
  }
}

function OrderScreen() {
  // order/:id
  const { query } = useRouter()
  const orderId = query.id

  const [{ loading, error, order }, dispatch] = useReducer(reducer, {
    loading: true,
    order: {},
    error: "",
  })
}

const handler = async (req, res) => {
  const session = await getSession({ req })
  if (!session) {
    return res.status(401).send("signin required")
  }
  await db.connect()

  const order = await Order.findById(req.query.id)
  await db.disconnect()
  res.send(order)
}

export default handler
