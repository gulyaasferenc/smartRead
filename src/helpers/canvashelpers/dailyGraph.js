export default (data) => {
  const canvasEl = document.getElementById(data.id)
  console.log(canvasEl)
  const ctx = canvasEl.getContext('2d')
  console.log(data)
  console.log(ctx)

  ctx.beginPath()
  ctx.lineWidth = 10
  ctx.strokeStyle = '#0f0f0f'
  console.log(ctx.strokeStyle)
  ctx.moveTo(4, 4)
  ctx.lineTo(4, data.height - 20)
  ctx.lineTo(data.width - 10, data.height - 20)
  ctx.stroke()
}
