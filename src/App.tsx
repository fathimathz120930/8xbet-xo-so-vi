import React, { useState, useEffect } from 'react';
import { Sun, Moon, Trophy, Target, AlertTriangle, BookOpen } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <header className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md z-40">
        <div className="flex items-center gap-3">
          <img src="https://8xbet-xo-so-vi.vercel.app/8xbet_light_logo.svg" alt=" Logo" className="w-10 h-10" />
          
          
        </div>
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Toggle Dark Mode"
        >
          {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </header>

      <main className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white pt-20 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center my-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
        Tại Sao Nhiều Người Tin Vào "Số Đẹp" Trong Xổ Số?
          </h1>

          <div className="relative rounded-xl overflow-hidden mb-12">
            <img
              src="https://8xbet-xo-so-vi.vercel.app/tai-sao-nhieu-nguoi-tin-vao-so-dep-trong-xo-so.webp"
              alt="cach-doc-keo-nha-cai-danh-cho-nguoi-moi-bat-dau"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              
            </div>
          </div>

          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
            <p className="text-dark p-6 text-lg font-medium">
               Từ các diễn đàn xổ số cho đến các nền tảng cá cược trực tuyến như 8xbet, việc tìm kiếm và chia sẻ "số đẹp" luôn là chủ đề nóng. Nhưng tại sao niềm tin vào những con số này lại có sức hút đến vậy? Đặc biệt đã có rất nhiều anh em muốn trúng các giải thưởng giá trị thông qua các con số may mắn này.
              </p>
              <p className="text-dark p-6 text-lg font-medium">
             Chính vì vậy, 8xbet sẽ khám phá sự thật thú vị đằng sau những con số may mắn được gắn mác là “số đẹp”, cũng như phương pháp chính xác chọn ra các con số này hiệu quả. Cùng theo dõi bài viết dưới đây nhé!
              </p>
            <h2 className="text-4xl md:text-5xl font-bold text-center my-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Định nghĩa của “Số đẹp” trong xổ số là gì?
          </h2>
            <div className="flex items-center gap-3 mb-4">
              <img
              src="https://8xbet-xo-so-vi.vercel.app/so-dep-trong-xso-dep-trong-xo-so-la-gi.webp"
              alt="vai-tro-cua-keo-nha-cai-can-nam-ro"
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              "Số đẹp" trong xổ số thường được định nghĩa là những con số mang ý nghĩa đặc biệt, gắn liền với những sự kiện quan trọng hoặc đơn giản là dễ nhớ đối với người chơi. Nhiều người tin rằng việc chọn số đẹp sẽ tăng cơ hội trúng thưởng, tuy nhiên trên thực tế, xổ số là một trò chơi hoàn toàn dựa trên may mắn.

            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Dù người chơi có chọn số đẹp hay sử dụng các công cụ dự đoán như trên các nền tảng cá cược trực tuyến như 8xbet, kết quả cuối cùng vẫn phụ thuộc vào yếu tố ngẫu nhiên.

            </p>







            

            
            
          </section>

          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
           Lý do nhiều người tin vào “số đẹp” trong xổ số
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
               Việc tìm kiếm "số đẹp" đã trở thành một trào lưu trong cộng đồng người chơi xổ số. Nhưng điều gì khiến phương pháp này trở nên phổ biến đến vậy? Hãy cùng 8xbet đi sâu vào phân tích để tìm ra câu trả lời nhé:
              </p>

          <div className="grid gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform">
              <h3 className="font-bold text-2xl mb-4 text-blue-600 dark:text-blue-400">Ảnh hưởng từ hiệu ứng placebo</h3>
              
                 <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Niềm tin vào "số đẹp" không chỉ đơn thuần là một lựa chọn ngẫu nhiên mà còn phản ánh một phần tâm lý của người chơi. Cảm giác được tự mình chọn ra những con số mang ý nghĩa cá nhân khiến họ cảm thấy như đang nắm giữ một phần quyền kiểm soát kết quả. Điều này tạo ra một hiệu ứng tâm lý tích cực, giúp cược thủ cảm thấy lạc quan hơn và sẵn sàng đối mặt với bất kỳ kết quả nào.
              </p>


             <h3 className="font-bold text-2xl mb-4 text-blue-600 dark:text-blue-400">Không muốn tìm kiếm sự phức tạp</h3>
              
                 <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
           Trong khi các phương pháp phân tích số liệu đòi hỏi anh em phải có kiến thức chuyên môn và dành nhiều thời gian nghiên cứu, thì việc chọn "số đẹp" lại hoàn toàn khác biệt. Người chơi chỉ cần dựa vào những yếu tố cá nhân, những con số mang ý nghĩa đặc biệt để đưa ra quyết định. Sự đơn giản này đã thu hút một lượng lớn cược thủ, đặc biệt là các anh em không muốn đầu tư quá nhiều thời gian và công sức vào việc phân tích.
              </p>
 <h3 className="font-bold text-2xl mb-4 text-blue-600 dark:text-blue-400">Ảnh hưởng từ mọi người</h3>
              
                 <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
       Cũng như hiệu ứng đám đông khi mua sắm, niềm tin vào "số đẹp" lan tỏa một cách nhanh chóng. Khi thấy nhiều người xung quanh cùng chia sẻ về những con số may mắn, người chơi dễ dàng bị cuốn theo. Từ đó các anh em có tâm lý muốn hòa nhập, tò mò và mong muốn tìm kiếm cơ hội sẽ dễ dàng bị thuyết phục và tin theo. 
              </p>
               <h3 className="font-bold text-2xl mb-4 text-blue-600 dark:text-blue-400">Ước mơ làm giàu nhanh chóng</h3>
              
                 <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
       Hình ảnh một cuộc sống giàu sang, sung túc luôn là động lực thôi thúc các anh em. Xổ số, với những giải thưởng hấp dẫn, trở thành một giấc mơ đẹp mà nhiều người muốn chạm tới. Việc chọn "số đẹp" được xem như một bước đệm để hiện thực hóa giấc mơ ấy, dù biết rằng con đường đó không chắc chắn và phần lớn dựa vào sự may mắn. 
              </p>

              

              
             
            </div>

            
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white mb-12">
            <h2 className="text-3xl font-bold mb-6">Phương pháp chọn số đẹp lô thủ hay sử dụng</h2>
            <img
              src="https://8xbet-xo-so-vi.vercel.app/phuong-phap-chon-so-dep-trong.webp"
              alt="Phương pháp chọn số đẹp trong xổ số
"
              className="w-full h-[400px] object-cover rounded-xl shadow-lg mb-8"
            />
             <div className="mt-6 space-y-4">
                 <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-white">
      Vậy, làm thế nào để chọn ra những con số tiêu chuẩn để làm số đẹp cho chính bản thân mình? Đừng lo vì 8xbet chúng tôi đã tổng hợp và thống kê lại các phương pháp chọn số của những người chơi tại nhà cái, từ đó đúc kết ra được một số kỹ thuật chơi đơn giản nhưng lại vô cùng hiệu quả sau đây:
              </p>

                <ul className="space-y-3 pl-6  text-white">
                  <li className="flex items-center gap-3  ">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700  text-white "><strong>Giải mã giấc mơ:</strong> Nhiều cược thủ tin rằng giấc mơ mang đến những điềm báo về tương lai, bao gồm cả những con số may mắn. Bằng cách ghi lại và phân tích giấc mơ, anh em có thể tìm ra những con số tiềm năng.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700  text-white"><strong>Soi cầu lô rơi:</strong> Đây là một trong những phương pháp được khá nhiều cược thủ ưa chuộng. Bằng cách theo dõi kết quả xổ số trong một khoảng thời gian nhất định, người chơi sẽ tìm ra những cặp số hay về cùng nhau, những con số lâu ngày chưa về, từ đó đưa ra dự đoán cho những kỳ quay tiếp theo.
</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700  text-white"><strong>Soi cầu lô kép:</strong> Lô kép, những cặp số đối xứng và đẹp mắt, từ lâu đã trở thành tâm điểm chú ý của nhiều người chơi lô đề. Với niềm tin rằng sự lặp lại của các con số sẽ mang đến may mắn, nhiều thánh soi cầu đã dành thời gian theo dõi tần suất xuất hiện của lô kép, hy vọng tìm ra những quy luật ẩn chứa và dự đoán được kết quả xổ số.
</span>
                  </li>
                 
                </ul>
                  <h2 className="text-3xl font-bold mb-6">Lưu ý quan trọng khi chọn chơi “Số đẹp” trong xổ số</h2>
                <p className="text-gray-700  text-white text-lg leading-relaxed">
     Để có thể tham gia chơi xổ số trực tuyến nói chung và áp dụng hiệu quả các phương pháp soi cầu nói riêng, đòi hỏi anh em cần lưu ý một số điều dưới đây:
              </p>
                 <ul className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-lg p-8 space-y-6 mb-12">
              <li className="flex items-center gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300 text-lg"><strong>Xổ số là trò chơi may rủi: </strong>Dù có áp dụng bất kỳ phương pháp nào, kết quả xổ số vẫn phụ thuộc vào yếu tố may mắn. Việc chọn "số đẹp" chỉ là một cách tăng thêm niềm vui và sự hứng thú khi chơi, không phải là cách đảm bảo chắc chắn trúng thưởng.</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300 text-lg"><strong>Luôn giữ thái độ tích cực:</strong> Dù kết quả chơi như thế nào, hãy luôn giữ cho mình một tâm lý thoải mái. Việc quá căng thẳng hoặc đặt quá nhiều kỳ vọng vào kết quả có thể ảnh hưởng đến cuộc sống hàng ngày.
</span>
              </li>


 <li className="flex items-center gap-4">
                <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300 text-lg"><strong>Tham gia các đơn vị chơi xổ số uy tín: </strong>Lựa chọn những nhà cái uy tín, có giấy phép hoạt động hợp pháp để đảm bảo quyền lợi của mình như 8xbet. Tránh tham gia vào các trang web lừa đảo, không rõ nguồn gốc.


</span>
              </li>

                   
              <li className="flex items-center gap-4">
                <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300 text-lg"><strong>Quản lý ngân sách hợp lý: </strong>Đặt ra một giới hạn ngân sách cụ thể cho việc chơi xổ số và tuyệt đối không vượt quá số tiền đó. Hãy coi xổ số như một hình thức giải trí, không nên đầu tư quá nhiều tiền vào đó.

</span>
              </li>
            </ul>
              </div>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
               
                <p className="text-gray-100">
                 <strong>8xbet </strong>hy vọng rằng những thông tin chia sẻ trong bài viết này sẽ hữu ích cho người chơi trong hành trình tìm kiếm những con số đẹp may mắn. Hãy luôn nhớ rằng,  <strong>xổ số  </strong>là một trò chơi may rủi, và việc trúng thưởng phụ thuộc vào nhiều yếu tố. </p>
                    <p className="text-gray-100">
Chúc anh em may mắn và có những trải nghiệm thú vị cùng  <strong>8xbet! </strong>
                </p>
              </div>

            

              


            </div>
          </div>

         
        </div>
      </main>
    </div>
  );
}

export default App;