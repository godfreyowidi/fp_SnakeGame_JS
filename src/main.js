import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { initialState } from './js/snake';

let state = initialState()

const x = c => Math.round(c * canvas.width / state.cols)
const y = r => Math.round(r * canvas.height / state.rows)

//Game loop draw
const draw = () => {
  //clear
  ctx.fillStyle = '#232323'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // draw snake
  ctx.fillStyle = 'rgb(0, 200, 500)'
  state.snake.map(p => ctx.fillRect(x(p.x), y(p.y), x(1), y(1)))

  // Draw apples
  ctx.fillStyle = 'rgb(255,50,0)'
  ctx.fillRect(x(state.apple.x), y(state.apple.y), x(1), y(1))

  // add crash
  if (state.snake.length == 0) {
    ctx.fillStyle = 'rgb(255,0,0)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }
}