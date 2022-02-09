import { useCallback, useMemo, useState } from 'react';
import './App.css';
// import TabMenu from './Component/Tabs'

// 가격순, 이름순으로 정렬하기
export default function App() {
  const data = [
    { id: 0, title: '잘빠진 여성용 융털 기모 조거 팬츠', price: 8900, sold_out: false },
    { id: 1, title: '굿모노 임산부용 면 레깅스', price: 9000, sold_out: true},
    { id: 2, title: '캐럿 여성 겨울용 밍크 레깅스 무발', price: 9900, sold_out: true },
    { id: 3, title: '이프노스 여성용 셀리나 레깅스 1 + 1', price: 11000, sold_out: false },
    { id: 4, title: '걸즈팩토리 여성용 지불독 맨투맨티셔츠', price: 12000, sold_out: true },
    { id: 5, title: '캐럿 여성용 베이직 레깅스 2pcs Pack', price: 13000, sold_out: false },
    { id: 6, title: '글램공감 여성용 기모 레깅스 무발 2p', price: 9900, sold_out: true },
  ];

  const selectList = ['----', 'price', 'name'];
  const [Selected, setSelected] = useState('');

  const options = useCallback(item => {
    if (item === 'price') {
      return { text: '가격순 정렬', value: 'price' };
    } else if (item === 'name') {
      return { text: '이름순 정렬', value: 'name' };
    } else {
      return { text: '----', value: '' };
    }
  }, []);

  const onChange = useCallback(e => {
    setSelected(e.target.value);
  }, []);

  const transformDate = useMemo(() => {
    const newData = [...data];
    if (Selected === 'price') {
      return newData.sort((a, b) => a.price - b.price);
    } else if (Selected === 'name') {
      return newData.sort((a, b) => {
        if (a.title < b.title) return -1;
      });
    }
    return newData;
  }, [Selected]);

  return (
    <div className='container'>
      <select onChange={onChange} value={Selected}>
        {selectList.map((item, idx) => {
          const { text, value } = options(item);

          return (
            <option key={idx} value={value}>
              {text}
            </option>
          );
        })}
      </select>

      <section className='contents'>
      {transformDate.map(el => (
        <p key={el.id} className={el.sold_out ? 'sold_out' : ''}>
          {el.title} / <span className='price'>{el.price}</span>
        </p>
      ))}
      </section>  
    </div>
  );
}
