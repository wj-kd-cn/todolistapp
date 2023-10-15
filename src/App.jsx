import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import './App.css';

function App() {
  return (
    <div class="todo-container">
      <div class="todo-wrap">
        <div class="todo-header">
          <input type="text" plaschoder="请输入你的任务名称，按回车确认"/>

        </div>
        <ul class="todo-main">
          <li>
            <label>
              <input type="checkbox" />
              <span>xxxxxx</span>
              <button class="btn btn-danger" style="display:none">删除</button>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>yyyyy</span>
              <button class="btn btn-danger" style="display:none">删除</button>
            </label>
          </li>

        </ul>
        <div class="todo-footer">
          <label> <input type="checkbox" /></label>
          <span><span>已完成0</span>/ 全部2</span>
          <button class="btn btn-danger">清除已完成的任务</button>
        </div>

      </div>


    </div>

  );
}

export default App;
