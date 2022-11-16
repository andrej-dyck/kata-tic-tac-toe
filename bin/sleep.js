const never = (msg) => {
  throw new Error(msg)
}

export const sleep = (amount, unit) => {
  const inMs =
    unit === 'sec' ? amount * 1000 :
      unit === 'min' ? amount * 60 * 1000 :
        never(`unknown sleep arguments ${amount} ${unit}`)

  return new Promise(resolve => setTimeout(resolve, inMs))
}
