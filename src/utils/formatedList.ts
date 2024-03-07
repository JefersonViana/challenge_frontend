const formatedList = (list: string[]) => (
  list.map((phone: any) => (
    {
      name: phone.name,
      brand: phone.brand,
      model: phone.model,
      data: [{ price: parseInt(phone.price), color: phone.color }]
    }
)));

export { formatedList }