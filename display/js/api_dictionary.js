(function() {
    // Giả định rằng bạn đã có biến `data` chứa dữ liệu từ điển
    // Ví dụ:
    const data = {
        "heartsteel": {
            "type": "Hũ cốt",
            "pronunciation": "/Mùa 10/",
            "meaning": "Hệ tộc dành cho những người muốn Top 8",
            "example": " Ví dụ như bạn nào đó TA( giấu tên) suốt ngày nhắc hớt tiu nhưng cứ chơi là Top 8 trong tay"
        },
        "a": {
            "type": "det",
            "pronunciation": "/eɪ/",
            "meaning": "một, nào đó"
        },
        "about": {
            "type": "adv",
            "pronunciation": "/əˈbaʊt/",
            "meaning": "khoảng"
        },
        "above": {
            "type": "prep",
            "pronunciation": "/əˈbʌv/",
            "meaning": "ở bên trên"
        },
        "across": {
            "type": "adv",
            "pronunciation": "/əˈkrɑːs/",
            "meaning": "ngang, ngang qua"
        },
        "act": {
            "type": "v",
            "pronunciation": "/ækt/",
            "meaning": "đóng vai (kịch, chèo, tuồng, phim), giả vờ"
        },
        "active": {
            "type": "adj",
            "pronunciation": "/ˈæk.tɪv/",
            "meaning": "tích cực, nhanh nhẹn, linh lợi"
        },
        "activity": {
            "type": "n",
            "pronunciation": "/ækˈtɪv.ə.t̬i/",
            "meaning": "hoạt động"
        },
        "add": {
            "type": "v",
            "pronunciation": "/æd/",
            "meaning": "thêm vào, làm tăng thêm"
        },
        "afraid": {
            "type": "adj",
            "pronunciation": "/əˈfreɪd/",
            "meaning": "sợ hãi, hoảng sợ"
        },
        "after": {
            "type": "prep",
            "pronunciation": "/ˈæf.tɚ/",
            "meaning": "(thời gian) sau, sau khi"
        },
        "again": {
            "type": "adv",
            "pronunciation": "/əˈɡen/",
            "meaning": "lại, lần nữa, nữa"
        },
        "age": {
            "type": "n",
            "pronunciation": "/eɪdʒ/",
            "meaning": "tuổi"
        },
        "ago": {
            "type": "adv",
            "pronunciation": "/əˈɡoʊ/",
            "meaning": "(thời gian) trước đây, về trước"
        },
        "agree": {
            "type": "v",
            "pronunciation": "/əˈɡriː/",
            "meaning": "đồng ý, tán thành"
        },
        "air": {
            "type": "n",
            "pronunciation": "/er/",
            "meaning": "không khí"
        },
        "all": {
            "type": "adj",
            "pronunciation": "/ɑːl/",
            "meaning": "tất cả, hết thảy, toàn bộ"
        },
        "alone": {
            "type": "adj",
            "pronunciation": "/əˈloʊn/",
            "meaning": "một mình, cô đơn, cô độc"
        },
        "along": {
            "type": "adv",
            "pronunciation": "/əˈlɑːŋ/",
            "meaning": "theo chiều dài, suốt theo"
        },
        "already": {
            "type": "adv",
            "pronunciation": "/ɑːlˈred.i/",
            "meaning": "đã, rồi; đã…rồi"
        },
        "always": {
            "type": "adv",
            "pronunciation": "/ˈɑːl.weɪz/",
            "meaning": "luôn luôn, lúc nào cũng, thường xuyên"
        },
        "am": {
            "type": "v",
            "pronunciation": "/æm/ /əm/",
            "meaning": "thì, là"
        },
        "amount": {
            "type": "n",
            "pronunciation": "/əˈmaʊnt/",
            "meaning": "lượng, số lượng"
        },
        "an": {
            "type": "det",
            "pronunciation": "/æn/ /ən/",
            "meaning": "một"
        },
        "and": {
            "type": "conj",
            "pronunciation": "/ænd/ /ənd/",
            "meaning": "và"
        },
        "angry": {
            "type": "adj",
            "pronunciation": "/ˈæŋ.ɡri/",
            "meaning": "tức giận, giận dữ"
        },
        "another": {
            "type": "adj",
            "pronunciation": "/əˈnʌð.ɚ/",
            "meaning": "nữa, thêm nữa, khác"
        },
        "answer": {
            "type": "n",
            "pronunciation": "/ˈæn.sɚ/",
            "meaning": "câu trả lời"
        },
        "any": {
            "type": "adj",
            "pronunciation": "/ˈen.i/",
            "meaning": "một (người, vật) bất kỳ"
        },
        "anyone": {
            "type": "pron",
            "pronunciation": "/ˈen.i.wʌn/",
            "meaning": "người nào đó, ai đó bất kỳ"
        },
        "anything": {
            "type": "pron",
            "pronunciation": "/ˈen.i.θɪŋ/",
            "meaning": "vật nào đó, bất kỳ cái gì"
        },
        "anytime": {
            "type": "adv",
            "pronunciation": "/ˈen.i.taɪm/",
            "meaning": "bất kỳ lúc nào"
        },
        "appear": {
            "type": "v",
            "pronunciation": "/əˈpɪr/",
            "meaning": "xuất hiện"
        },
        "apple": {
            "type": "n",
            "pronunciation": "/ˈæp.əl/",
            "meaning": "quả táo"
        },
        "are": {
            "type": "v",
            "pronunciation": "/ɑːr/ /ɚ/",
            "meaning": "là (dùng cho ngôi thứ ba số nhiều)"
        },
        "area": {
            "type": "n",
            "pronunciation": "/ˈer.i.ə/",
            "meaning": "khu vực, lĩnh vực, phạm vi, diện tích"
        },
        "arm": {
            "type": "n",
            "pronunciation": "/ɑːrm/",
            "meaning": "cánh tay"
        },
        "army": {
            "type": "n",
            "pronunciation": "/ˈɑːr.mi/",
            "meaning": "quân đội"
        },
        "around": {
            "type": "prep",
            "pronunciation": "/əˈraʊnd/",
            "meaning": "xung quanh, vòng quanh; khoảng chừng"
        },
        "arrive": {
            "type": "v",
            "pronunciation": "/əˈraɪv/",
            "meaning": "đi đến, đến nơi"
        },
        "art": {
            "type": "n",
            "pronunciation": "/ɑːrt/",
            "meaning": "nghệ thuật"
        },
        "as": {
            "type": "adv",
            "pronunciation": "/æz/ /əz/",
            "meaning": "cũng, ngang bằng, tương tự"
        },
        "ask": {
            "type": "v",
            "pronunciation": "/æsk/",
            "meaning": "hỏi, đặt câu hỏi"
        },
        "at": {
            "type": "prep",
            "pronunciation": "/æt/ /ət/",
            "meaning": "ở tại (vị trí)"
        },
        "attack": {
            "type": "v",
            "pronunciation": "/əˈtæk/",
            "meaning": "tấn công"
        },
        "aunt": {
            "type": "n",
            "pronunciation": "/ænt/",
            "meaning": "cô, dì, thím, mợ, bác gái"
        },
        "autumn": {
            "type": "n",
            "pronunciation": "/ˈɑː.t̬əm/",
            "meaning": "mùa thu"
        },
        "away": {
            "type": "adv",
            "pronunciation": "/əˈweɪ/",
            "meaning": "rời xa, ra xa"
        },
        "baby": {
            "type": "n",
            "pronunciation": "/ˈbeɪ.bi/",
            "meaning": "em bé"
        },
        "back": {
            "type": "n",
            "pronunciation": "/bæk/",
            "meaning": "(bộ phận cơ thể) lưng"
        },
        "bad": {
            "type": "adj",
            "pronunciation": "/bæd/",
            "meaning": "tồi tệ, xấu, không tốt"
        },
        "bag": {
            "type": "n",
            "pronunciation": "/bæɡ/",
            "meaning": "túi đựng"
        },
        "ball": {
            "type": "n",
            "pronunciation": "/bɑːl/",
            "meaning": "quả bóng"
        },
        "bank": {
            "type": "n",
            "pronunciation": "/bæŋk/",
            "meaning": "ngân hàng"
        },
        "base": {
            "type": "n",
            "pronunciation": "/beɪs/",
            "meaning": "đáy, cơ sở, nền tảng"
        },
        "basket": {
            "type": "n",
            "pronunciation": "/ˈbæs.kət/",
            "meaning": "cái rổ, cái giỏ"
        },
        "bath": {
            "type": "n",
            "pronunciation": "/bæθ/",
            "meaning": "bồn tắm, chậu tắm"
        },
        "be": {
            "type": "v",
            "pronunciation": "/biː/ /bi/ /bɪ/",
            "meaning": "thì, là"
        },
        "bean": {
            "type": "n",
            "pronunciation": "/biːn/",
            "meaning": "hạt đậu"
        },
        "bear": {
            "type": "n, v",
            "pronunciation": "/ber/",
            "meaning": "con gấu; chịu đựng"
        },
        "beautiful": {
            "type": "adj",
            "pronunciation": "/ˈbjuː.t̬ə.fəl/",
            "meaning": "xinh đẹp"
        },
        "bed": {
            "type": "n",
            "pronunciation": "/bed/",
            "meaning": "cái giường"
        },
        "bedroom": {
            "type": "n",
            "pronunciation": "/ˈbed.ruːm/ /ˈbed.rʊm/",
            "meaning": "phòng ngủ"
        },
        "beer": {
            "type": "n",
            "pronunciation": "/bɪr/",
            "meaning": "rượu bia"
        },
        "behave": {
            "type": "v",
            "pronunciation": "/bɪˈheɪv/",
            "meaning": "đối xử, cư xử"
        },
        "before": {
            "type": "adv",
            "pronunciation": "/bɪˈfɔːr/",
            "meaning": "(thời gian) trước đây, hồi trước"
        },
        "begin": {
            "type": "v",
            "pronunciation": "/bɪˈɡɪn/",
            "meaning": "bắt đầu"
        },
        "behind": {
            "type": "adv",
            "pronunciation": "/bɪˈhaɪnd/",
            "meaning": "(vị trí) đằng sau, phía sau"
        },
        "bell": {
            "type": "n",
            "pronunciation": "/bel/",
            "meaning": "cái chuông"
        },
        "below": {
            "type": "prep",
            "pronunciation": "/bɪˈloʊ/",
            "meaning": "ở dưới, thấp hơn"
        },
        "besides": {
            "type": "adv",
            "pronunciation": "/bɪˈsaɪdz/",
            "meaning": "ngoài ra, hơn"
        },
        "best": {
            "type": "adj",
            "pronunciation": "/best/",
            "meaning": "(so sánh) tốt nhất, chất lượng nhất, đẹp nhất"
        },
        "better": {
            "type": "adj",
            "pronunciation": "/ˈbet̬.ɚ/",
            "meaning": "(so sánh) tốt hơn, chất lượng hơn, đẹp hơn"
        },
        "between": {
            "type": "prep",
            "pronunciation": "/bɪˈtwiːn/",
            "meaning": "ở giữa"
        },
        "big": {
            "type": "adj",
            "pronunciation": "/bɪɡ/",
            "meaning": "kích thước lớn, to"
        },
        "bird": {
            "type": "n",
            "pronunciation": "/bɝːd/",
            "meaning": "con chim"
        },
        "birth": {
            "type": "n",
            "pronunciation": "/bɝːθ/",
            "meaning": "sự ra đời, sự sinh đẻ"
        },
        "birthday": {
            "type": "n",
            "pronunciation": "/ˈbɝːθ.deɪ/",
            "meaning": "sinh nhật"
        },
        "bit": {
            "type": "n",
            "pronunciation": "/bɪt/",
            "meaning": "miếng, mẩu, một chút"
        },
        "bite": {
            "type": "v",
            "pronunciation": "/baɪt/",
            "meaning": "cắn"
        },
        "black": {
            "type": "adj",
            "pronunciation": "/blæk/",
            "meaning": "(màu sắc) đen"
        },
        "bleed": {
            "type": "v",
            "pronunciation": "/bliːd/",
            "meaning": "chảy máu"
        },
        "block": {
            "type": "n",
            "pronunciation": "/blɑːk/",
            "meaning": "khối, tảng"
        },
        "blood": {
            "type": "n",
            "pronunciation": "/blʌd/",
            "meaning": "máu"
        },
        "blow": {
            "type": "v",
            "pronunciation": "/bloʊ/",
            "meaning": "thổi, hà hơi"
        },
        "blue": {
            "type": "n",
            "pronunciation": "/bluː/",
            "meaning": "(màu sắc) xanh dương, xanh nước biển"
        },
        "board": {
            "type": "n",
            "pronunciation": "/bɔːrd/",
            "meaning": "cái bảng"
        },
        "boat": {
            "type": "n",
            "pronunciation": "/boʊt/",
            "meaning": "tàu thuyền"
        },
        "body": {
            "type": "n",
            "pronunciation": "/ˈbɑː.di/",
            "meaning": "cơ thể, thân thể"
        },
        "boil": {
            "type": "v",
            "pronunciation": "/bɔɪl/",
            "meaning": "sôi, đun sôi, luộc"
        },
        "bone": {
            "type": "n",
            "pronunciation": "/boʊn/",
            "meaning": "xương"
        },
        "book": {
            "type": "n",
            "pronunciation": "/bʊk/",
            "meaning": "cuốn sách"
        },
        "border": {
            "type": "n",
            "pronunciation": "/ˈbɔːr.dɚ/",
            "meaning": "ranh giới, biên giới"
        },
        "born": {
            "type": "v",
            "pronunciation": "/bɔːrn/",
            "meaning": "(quá khứ) sinh đẻ"
        },
        "borrow": {
            "type": "v",
            "pronunciation": "/ˈbɑːr.oʊ/",
            "meaning": "vay, mượn"
        },
        "both": {
            "type": "adj",
            "pronunciation": "/boʊθ/",
            "meaning": "cả hai"
        },
        "bottle": {
            "type": "n",
            "pronunciation": "/ˈbɑː.t̬əl/",
            "meaning": "chai, lọ"
        },
        "bottom": {
            "type": "n",
            "pronunciation": "/ˈbɑː.t̬əm/",
            "meaning": "phần đáy"
        },
        "bowl": {
            "type": "n",
            "pronunciation": "/boʊl/",
            "meaning": "cái tô, bát"
        },
        "box": {
            "type": "n",
            "pronunciation": "/bɑːks/",
            "meaning": "hộp, thùng đựng"
        },
        "boy": {
            "type": "n",
            "pronunciation": "/bɔɪ/",
            "meaning": "cậu bé, chú bé, bé trai"
        },
        "branch": {
            "type": "n",
            "pronunciation": "/bræntʃ/",
            "meaning": "cành cây, nhánh, chi nhánh"
        },
        "brave": {
            "type": "adj",
            "pronunciation": "/breɪv/",
            "meaning": "dũng cảm"
        },
        "bread": {
            "type": "n",
            "pronunciation": "/bred/",
            "meaning": "bánh mỳ"
        },
        "break": {
            "type": "v",
            "pronunciation": "/breɪk/",
            "meaning": "làm vỡ, làm gãy"
        },
        "breakfast": {
            "type": "n",
            "pronunciation": "/ˈbrek.fəst/",
            "meaning": "bữa sáng"
        },
        "breathe": {
            "type": "v",
            "pronunciation": "/briːð/",
            "meaning": "hít thở"
        },
        "bridge": {
            "type": "n",
            "pronunciation": "/brɪdʒ/",
            "meaning": "cây cầu, cầu"
        },
        "bright": {
            "type": "adj",
            "pronunciation": "/braɪt/",
            "meaning": "sáng, sáng sủa, rạng rỡ"
        },
        "bring": {
            "type": "v",
            "pronunciation": "/brɪŋ/",
            "meaning": "mang, đưa, mang lại"
        },
        "brother": {
            "type": "n",
            "pronunciation": "/ˈbrʌð.ɚ/",
            "meaning": "anh, em trai"
        },
        "brown": {
            "type": "adj",
            "pronunciation": "/braʊn/",
            "meaning": "(màu sắc) nâu"
        },
        "brush": {
            "type": "n",
            "pronunciation": "/brʌʃ/",
            "meaning": "cọ, bàn chải"
        },
        "build": {
            "type": "v",
            "pronunciation": "/bɪld/",
            "meaning": "xây dựng"
        },
        "burn": {
            "type": "v",
            "pronunciation": "/bɝːn/",
            "meaning": "đốt cháy, thiêu đốt"
        },
        "burst": {
            "type": "v",
            "pronunciation": "/bɝːst/",
            "meaning": "nổ, vỡ tung, phá tung"
        },
        "bus": {
            "type": "n",
            "pronunciation": "/bʌs/",
            "meaning": "xe buýt"
        },
        "business": {
            "type": "n",
            "pronunciation": "/ˈbɪz.nəs/",
            "meaning": "kinh doanh, việc kinh doanh"
        },
        "busy": {
            "type": "adj",
            "pronunciation": "/ˈbɪz.i/",
            "meaning": "bận rộn"
        },
        "but": {
            "type": "conj",
            "pronunciation": "/bʌt/",
            "meaning": "nhưng, nhưng mà"
        },
        "butter": {
            "type": "n",
            "pronunciation": "/ˈbʌt̬.ɚ/",
            "meaning": "bơ"
        },
        "button": {
            "type": "n",
            "pronunciation": "/ˈbʌt̬.ən/",
            "meaning": "nút, cúc"
        },
        "buy": {
            "type": "v",
            "pronunciation": "/baɪ/",
            "meaning": "mua"
        },
        "by": {
            "type": "prep",
            "pronunciation": "/baɪ/",
            "meaning": "bởi, bằng, qua"
        },
        "cake": {
            "type": "n",
            "pronunciation": "/keɪk/",
            "meaning": "bánh kem"
        },
        "call": {
            "type": "n, v",
            "pronunciation": "/kɑːl/",
            "meaning": "cuộc gọi; kêu gọi"
        },
        "can": {
            "type": "modal verb",
            "pronunciation": "/kæn/ /kən/",
            "meaning": "có thể, có khả năng"
        },
        "candle": {
            "type": "n",
            "pronunciation": "/ˈkæn.dəl/",
            "meaning": "nến"
        },
        "cap": {
            "type": "n",
            "pronunciation": "/kæp/",
            "meaning": "mũ lưỡi trai"
        },
        "car": {
            "type": "n",
            "pronunciation": "/kɑːr/",
            "meaning": "xe ô tô"
        },
        "card": {
            "type": "n",
            "pronunciation": "/kɑːrd/",
            "meaning": "tấm thẻ, thiệp"
        },
        "care": {
            "type": "n",
            "pronunciation": "/ker/",
            "meaning": "sự quan tâm, bảo vệ"
        },
        "careful": {
            "type": "adj",
            "pronunciation": "/ˈker.fəl/",
            "meaning": "cẩn thận"
        },
        "careless": {
            "type": "adj",
            "pronunciation": "/ˈker.ləs/",
            "meaning": "lỡ đễnh, cẩu thả, bất cẩn"
        },
        "carry": {
            "type": "v",
            "pronunciation": "/ˈker.i/",
            "meaning": "mang, vác, đem theo"
        },
        "case": {
            "type": "n",
            "pronunciation": "/keɪs/",
            "meaning": "trường hợp, tình huống"
        },
        "cat": {
            "type": "n",
            "pronunciation": "/kæt/",
            "meaning": "con mèo"
        },
        "catch": {
            "type": "v",
            "pronunciation": "/kætʃ/",
            "meaning": "bắt lấy, nắm lấy"
        },
        "central": {
            "type": "adj",
            "pronunciation": "/ˈsen.trəl/",
            "meaning": "ở giữa, trung tâm"
        },
        "century": {
            "type": "n",
            "pronunciation": "/ˈsen.tʃər.i/",
            "meaning": "thế kỷ"
        },
        "certain": {
            "type": "adj",
            "pronunciation": "/ˈsɝː.tən/",
            "meaning": "chắc chắn, chắc nịch"
        },
        "chair": {
            "type": "n",
            "pronunciation": "/tʃer/",
            "meaning": "cái ghế"
        },
        "chance": {
            "type": "n",
            "pronunciation": "/tʃæns/",
            "meaning": "cơ hội"
        },
        "change": {
            "type": "n, v",
            "pronunciation": "/tʃeɪndʒ/",
            "meaning": "sự thay đổi; thay đổi"
        },
        "chase": {
            "type": "v",
            "pronunciation": "/tʃeɪs/",
            "meaning": "theo đuổi"
        },
        "cheap": {
            "type": "adj",
            "pronunciation": "/tʃiːp/",
            "meaning": "rẻ"
        },
        "cheese": {
            "type": "n",
            "pronunciation": "/tʃiːz/",
            "meaning": "phó mát"
        },
        "chicken": {
            "type": "n",
            "pronunciation": "/ˈtʃɪk.ɪn/",
            "meaning": "con gà"
        },
        "child": {
            "type": "n",
            "pronunciation": "/tʃaɪld/",
            "meaning": "đứa trẻ, con"
        },
        "children": {
            "type": "n",
            "pronunciation": "/ˈtʃɪl.drən/",
            "meaning": "những đứa trẻ, những đứa con"
        },
        "chocolate": {
            "type": "n",
            "pronunciation": "/ˈtʃɑːk.lət/",
            "meaning": "sô cô la"
        },
        "choice": {
            "type": "n",
            "pronunciation": "/tʃɔɪs/",
            "meaning": "lựa chọn"
        },
        "choose": {
            "type": "v",
            "pronunciation": "/tʃuːz/",
            "meaning": "chọn, lựa"
        },
        "circle": {
            "type": "n",
            "pronunciation": "/ˈsɝː.kəl/",
            "meaning": "vòng tròn, đường tròn"
        },
        "city": {
            "type": "n",
            "pronunciation": "/ˈsɪt̬.i/",
            "meaning": "thành phố"
        },
        "class": {
            "type": "n",
            "pronunciation": "/klæs/",
            "meaning": "lớp học"
        },
        "clever": {
            "type": "adj",
            "pronunciation": "/ˈklev.ɚ/",
            "meaning": "thông minh, nhanh trí"
        },
        "clean": {
            "type": "adj",
            "pronunciation": "/kliːn/",
            "meaning": "sạch sẽ"
        },
        "clear": {
            "type": "adj",
            "pronunciation": "/klɪr/",
            "meaning": "rõ ràng, minh bạch"
        },
        "climb": {
            "type": "v",
            "pronunciation": "/klaɪm/",
            "meaning": "leo trèo"
        },
        "clock": {
            "type": "n",
            "pronunciation": "/klɑːk/",
            "meaning": "đồng hồ"
        },
        "cloth": {
            "type": "n",
            "pronunciation": "/klɑːθ/",
            "meaning": "miếng vải"
        },
        "clothes": {
            "type": "n",
            "pronunciation": "/kloʊðz/",
            "meaning": "quần áo"
        },
        "cloud": {
            "type": "n",
            "pronunciation": "/klaʊd/",
            "meaning": "đám mây"
        },
        "cloudy": {
            "type": "adj",
            "pronunciation": "/ˈklaʊ.di/",
            "meaning": "u ám, có mây mù"
        },
        "close": {
            "type": "v",
            "pronunciation": "/kloʊz/",
            "meaning": "đóng, kết thúc"
        },
        "coffee": {
            "type": "n",
            "pronunciation": "/ˈkɑː.fi/",
            "meaning": "cà phê"
        },
        "coat": {
            "type": "n",
            "pronunciation": "/koʊt/",
            "meaning": "áo choàng ngoài, áo khoác"
        },
        "coin": {
            "type": "n",
            "pronunciation": "/kɔɪn/",
            "meaning": "đồng xu"
        },
        "cold": {
            "type": "adj",
            "pronunciation": "/koʊld/",
            "meaning": "lạnh lẽo"
        },
        "collect": {
            "type": "v",
            "pronunciation": "/kəˈlekt/",
            "meaning": "sưu tầm"
        },
        "colour": {
            "type": "n",
            "pronunciation": "/ˈkʌl.ɚ/",
            "meaning": "màu sắc"
        },
        "comb": {
            "type": "n",
            "pronunciation": "/koʊm/",
            "meaning": "cái lược chải đầu"
        },
        "comfortable": {
            "type": "adj",
            "pronunciation": "/ˈkʌm.fɚ.t̬ə.bəl/",
            "meaning": "thoải mái, dễ chịu"
        },
        "common": {
            "type": "adj",
            "pronunciation": "/ˈkɑː.mən/",
            "meaning": "phổ biến"
        },
        "compare": {
            "type": "v",
            "pronunciation": "/kəmˈper/",
            "meaning": "so sánh, đối chiếu"
        },
        "come": {
            "type": "v",
            "pronunciation": "/kʌm/",
            "meaning": "đến, tiến đến, đi cùng"
        },
        "complete": {
            "type": "v",
            "pronunciation": "/kəmˈpliːt/",
            "meaning": "hoàn thành, làm xong"
        },
        "computer": {
            "type": "n",
            "pronunciation": "/kəmˈpjuː.t̬ɚ/",
            "meaning": "máy vi tính"
        },
        "condition": {
            "type": "n",
            "pronunciation": "/kənˈdɪʃ.ən/",
            "meaning": "điều kiện, trạng thái"
        },
        "continue": {
            "type": "v",
            "pronunciation": "/kənˈtɪn.juː/",
            "meaning": "tiếp tục, duy trì"
        },
        "control": {
            "type": "v",
            "pronunciation": "/kənˈtroʊl/",
            "meaning": "kiểm soát"
        },
        "cook": {
            "type": "v",
            "pronunciation": "/kʊk/",
            "meaning": "nấu ăn, chế biến"
        },
        "cool": {
            "type": "adj",
            "pronunciation": "/kuːl/",
            "meaning": "mát mẻ"
        },
        "copper": {
            "type": "n",
            "pronunciation": "/ˈkɑː.pɚ/",
            "meaning": "kim loại đồng"
        },
        "corn": {
            "type": "n",
            "pronunciation": "/kɔːrn/",
            "meaning": "ngô, bắp"
        },
        "corner": {
            "type": "n",
            "pronunciation": "/ˈkɔːr.nɚ/",
            "meaning": "góc"
        },
        "correct": {
            "type": "adj",
            "pronunciation": "/kəˈrekt/",
            "meaning": "chính xác, đúng"
        },
        "cost": {
            "type": "n",
            "pronunciation": "/kɑːst/",
            "meaning": "giá cả, chi phí"
        },
        "contain": {
            "type": "v",
            "pronunciation": "/kənˈteɪn/",
            "meaning": "chứa, đựng"
        },
        "count": {
            "type": "v",
            "pronunciation": "/kaʊnt/",
            "meaning": "đếm, tính, tính đến"
        },
        "country": {
            "type": "n",
            "pronunciation": "/ˈkʌn.tri/",
            "meaning": "đất nước, quốc gia"
        },
        "course": {
            "type": "n",
            "pronunciation": "/kɔːrs/",
            "meaning": "khóa học"
        },
        "cover": {
            "type": "v",
            "pronunciation": "/ˈkʌv.ɚ/",
            "meaning": "che, đậy"
        },
        "crash": {
            "type": "v",
            "pronunciation": "/kræʃ/",
            "meaning": "đâm vào nhau"
        },
        "cross": {
            "type": "v",
            "pronunciation": "/krɑːs/",
            "meaning": "đi qua, vượt qua"
        },
        "cry": {
            "type": "v",
            "pronunciation": "/kraɪ/",
            "meaning": "khóc lóc"
        },
        "cup": {
            "type": "n",
            "pronunciation": "/kʌp/",
            "meaning": "cốc, chén đựng nước"
        },
        "cupboard": {
            "type": "n",
            "pronunciation": "/ˈkʌb.ɚd/",
            "meaning": "tủ đựng"
        },
        "cut": {
            "type": "n, v",
            "pronunciation": "/kʌt/",
            "meaning": "miếng cắt; cắt, xén"
        },
        "dance": {
            "type": "v",
            "pronunciation": "/dæns/",
            "meaning": "nhảy nhót"
        },
        "dangerous": {
            "type": "adj",
            "pronunciation": "/ˈdeɪn.dʒɚ.əs/",
            "meaning": "nguy hiểm"
        },
        "dark": {
            "type": "adj",
            "pronunciation": "/dɑːrk/",
            "meaning": "tối tăm, đen tối"
        },
        "daughter": {
            "type": "n",
            "pronunciation": "/ˈdɑː.t̬ɚ/",
            "meaning": "(quan hệ với cha mẹ) con gái"
        },
        "day": {
            "type": "n",
            "pronunciation": "/deɪ/",
            "meaning": "ngày"
        },
        "dead": {
            "type": "adj",
            "pronunciation": "/ded/",
            "meaning": "chết, hỏng, không hoạt động"
        },
        "decide": {
            "type": "v",
            "pronunciation": "/dɪˈsaɪd/",
            "meaning": "đưa ra quyết định"
        },
        "decrease": {
            "type": "v",
            "pronunciation": "/ˈdiː.kriːs/",
            "meaning": "giảm bớt, làm giảm đi"
        },
        "deep": {
            "type": "adj",
            "pronunciation": "/diːp/",
            "meaning": "sâu, sâu xa"
        },
        "deer": {
            "type": "n",
            "pronunciation": "/dɪr/",
            "meaning": "con hươu"
        },
        "depend": {
            "type": "v",
            "pronunciation": "/dɪˈpend/",
            "meaning": "phụ thuộc, tùy thuộc vào"
        },
        "desk": {
            "type": "n",
            "pronunciation": "/desk/",
            "meaning": "cái bàn làm việc"
        },
        "destroy": {
            "type": "v",
            "pronunciation": "/dɪˈstrɔɪ/",
            "meaning": "tàn phá, phá hủy"
        },
        "develop": {
            "type": "v",
            "pronunciation": "/dɪˈvel.əp/",
            "meaning": "phát triển"
        },
        "die": {
            "type": "v",
            "pronunciation": "/daɪ/",
            "meaning": "chết, mất, hy sinh"
        },
        "different": {
            "type": "adj",
            "pronunciation": "/ˈdɪf.ɚ.ənt/",
            "meaning": "khác biệt"
        },
        "difficult": {
            "type": "adj",
            "pronunciation": "/ˈdɪf.ə.kəlt/",
            "meaning": "khó khăn, gây khó"
        },
        "dinner": {
            "type": "n",
            "pronunciation": "/ˈdɪn.ɚ/",
            "meaning": "bữa tối"
        },
        "direction": {
            "type": "n",
            "pronunciation": "/dɪˈrek.ʃən/",
            "meaning": "phương, hướng"
        },
        "dirty": {
            "type": "adj",
            "pronunciation": "/ˈdɝː.t̬i/",
            "meaning": "dơ bẩn"
        },
        "discover": {
            "type": "v",
            "pronunciation": "/dɪˈskʌv.ɚ/",
            "meaning": "phát hiện, khám phá ra"
        },
        "dish": {
            "type": "n",
            "pronunciation": "/dɪʃ/",
            "meaning": "cái đĩa"
        },
        "do": {
            "type": "v",
            "pronunciation": "/du/",
            "meaning": "làm, thực hiện"
        },
        "dog": {
            "type": "n",
            "pronunciation": "/dɑːɡ/",
            "meaning": "con chó"
        },
        "door": {
            "type": "n",
            "pronunciation": "/dɔːr/",
            "meaning": "cánh cửa"
        },
        "double": {
            "type": "adj",
            "pronunciation": "/ˈdʌb.əl/",
            "meaning": "gấp đôi"
        },
        "down": {
            "type": "adv",
            "pronunciation": "/daʊn/",
            "meaning": "xuống dưới"
        },
        "draw": {
            "type": "v",
            "pronunciation": "/drɑː/",
            "meaning": "vẽ, vẽ ra"
        },
        "dream": {
            "type": "n",
            "pronunciation": "/driːm/",
            "meaning": "giấc mơ"
        },
        "dress": {
            "type": "n",
            "pronunciation": "/dres/",
            "meaning": "chiếc váy"
        },
        "drink": {
            "type": "n, v",
            "pronunciation": "/drɪŋk/",
            "meaning": "nước uống; uống"
        },
        "drive": {
            "type": "v",
            "pronunciation": "/draɪv/",
            "meaning": "lái xe, điều khiển"
        },
        "drop": {
            "type": "v",
            "pronunciation": "/drɑːp/",
            "meaning": "rơi, rơi xuống"
        },
        "dry": {
            "type": "adj",
            "pronunciation": "/draɪ/",
            "meaning": "khô"
        },
        "duck": {
            "type": "n",
            "pronunciation": "/dʌk/",
            "meaning": "con vịt"
        },
        "dust": {
            "type": "n",
            "pronunciation": "/dʌst/",
            "meaning": "bụi bặm, bụi"
        },
        "duty": {
            "type": "n",
            "pronunciation": "/ˈduː.t̬i/",
            "meaning": "nhiệm vụ, trách nhiệm"
        },
        "each": {
            "type": "det, pron",
            "pronunciation": "/itʃ/",
            "meaning": "mỗi"
        },
        "ear": {
            "type": "n",
            "pronunciation": "/ɪr/",
            "meaning": "tai"
        },
        "early": {
            "type": "adv, adj",
            "pronunciation": "/ˈɝː.li/",
            "meaning": "sớm, lúc sáng"
        },
        "earn": {
            "type": "v",
            "pronunciation": "/ɜːrn/",
            "meaning": "kiếm tiền"
        },
        "earth": {
            "type": "n",
            "pronunciation": "/ɝːθ/",
            "meaning": "trái đất, đất đai"
        },
        "east": {
            "type": "n, adv",
            "pronunciation": "/ist/",
            "meaning": "phía đông, về phía đông"
        },
        "easy": {
            "type": "adj",
            "pronunciation": "/ˈiː.zi/",
            "meaning": "dễ dàng"
        },
        "eat": {
            "type": "v",
            "pronunciation": "/iːt/",
            "meaning": "ăn"
        },
        "education": {
            "type": "n",
            "pronunciation": "/ˌedʒ.əˈkeɪ.ʃən/",
            "meaning": "sự giáo dục"
        },
        "effect": {
            "type": "n",
            "pronunciation": "/ɪˈfekt/",
            "meaning": "hiệu ứng, kết quả"
        },
        "egg": {
            "type": "n",
            "pronunciation": "/eɡ/",
            "meaning": "quả trứng"
        },
        "eight": {
            "type": "num",
            "pronunciation": "/eɪt/",
            "meaning": "số tám"
        },
        "eighteen": {
            "type": "num",
            "pronunciation": "/ˌeɪˈtiːn/",
            "meaning": "số mười tám"
        },
        "eighty": {
            "type": "num",
            "pronunciation": "/ˈeɪ.t̬i/",
            "meaning": "số tám mươi"
        },
        "either": {
            "type": "det, pron, adv",
            "pronunciation": "/ˈiː.ðɚ/",
            "meaning": "bất cứ, không kể, không quan trọng; hoặc"
        },
        "electric": {
            "type": "adj",
            "pronunciation": "/ɪˈlek.trɪk/",
            "meaning": "điện"
        },
        "elephant": {
            "type": "n",
            "pronunciation": "/ˈel.ə.fənt/",
            "meaning": "con voi"
        },
        "else": {
            "type": "adj, adv",
            "pronunciation": "/els/",
            "meaning": "khác, ngoài ra"
        },
        "empty": {
            "type": "adj",
            "pronunciation": "/ˈem.p.ti/",
            "meaning": "trống rỗng, hết"
        },
        "end": {
            "type": "n, v",
            "pronunciation": "/end/",
            "meaning": "phần cuối cùng; kết thúc, chấm dứt"
        },
        "enemy": {
            "type": "n",
            "pronunciation": "/ˈen.ə.mi/",
            "meaning": "kẻ thù"
        },
        "enjoy": {
            "type": "v",
            "pronunciation": "/ɪnˈdʒɔɪ/",
            "meaning": "thích, thưởng thức"
        },
        "enough": {
            "type": "det, pron, adv",
            "pronunciation": "/ɪˈnʌf/",
            "meaning": "đủ, đủ rồi"
        },
        "enter": {
            "type": "v",
            "pronunciation": "/ˈen.t̬ɚ/",
            "meaning": "nhập, đi vào"
        },
        "equal": {
            "type": "adj",
            "pronunciation": "/ˈiː.kwəl/",
            "meaning": "bằng nhau, cân bằng"
        },
        "especially": {
            "type": "adv",
            "pronunciation": "/ɪˈspeʃ.əl.i/",
            "meaning": "đặc biệt"
        },
        "even": {
            "type": "adv, adj",
            "pronunciation": "/ˈiː.vən/",
            "meaning": "ngay cả, thậm chí; bằng phẳng"
        },
        "evening": {
            "type": "n",
            "pronunciation": "/ˈiːv.nɪŋ/",
            "meaning": "buổi tối"
        },
        "event": {
            "type": "n",
            "pronunciation": "/ɪˈvent/",
            "meaning": "sự kiện"
        },
        "ever": {
            "type": "adv",
            "pronunciation": "/ev.ər/",
            "meaning": "từng, luôn, bao giờ"
        },
        "every": {
            "type": "det",
            "pronunciation": "/ˈev.ri/",
            "meaning": "mỗi"
        },
        "everyone": {
            "type": "pron",
            "pronunciation": "/ˈev.ri.wʌn/",
            "meaning": "mọi người, tất cả mọi người"
        },
        "everything": {
            "type": "pron",
            "pronunciation": "/ˈev.ri.θɪŋ/",
            "meaning": "mọi thứ"
        },
        "exactly": {
            "type": "adv",
            "pronunciation": "/ɪɡˈzæk.t̬li/",
            "meaning": "chính xác"
        },
        "example": {
            "type": "n",
            "pronunciation": "/ɪɡˈzæm.pəl/",
            "meaning": "ví dụ"
        },
        "except": {
            "type": "prep",
            "pronunciation": "/ɪkˈsept/",
            "meaning": "ngoại trừ, trừ ra"
        },
        "excited": {
            "type": "adj",
            "pronunciation": "/ɪkˈsaɪ.t̬ɪd/",
            "meaning": "phấn khích, hồi hộp"
        },
        "exercise": {
            "type": "n",
            "pronunciation": "/ˈek.sɚ.saɪz/",
            "meaning": "bài tập"
        },
        "expect": {
            "type": "v",
            "pronunciation": "/ɪkˈspekt/",
            "meaning": "chờ đợi, mong chờ"
        },
        "expensive": {
            "type": "adj",
            "pronunciation": "/ɪkˈspen.sɪv/",
            "meaning": "đắt tiền"
        },
        "explain": {
            "type": "v",
            "pronunciation": "/ɪkˈspleɪn/",
            "meaning": "giải thích"
        },
        "eye": {
            "type": "n",
            "pronunciation": "/aɪ/",
            "meaning": "mắt"
        },
        "face": {
            "type": "n",
            "pronunciation": "/feɪs/",
            "meaning": "mặt, gương mặt"
        },
        "fact": {
            "type": "n",
            "pronunciation": "/fækt/",
            "meaning": "sự thật, thực tế"
        },
        "fail": {
            "type": "v",
            "pronunciation": "/feɪl/",
            "meaning": "thất bại, không thành công"
        },
        "fall": {
            "type": "v",
            "pronunciation": "/fɑːl/",
            "meaning": "ngã, rơi"
        },
        "family": {
            "type": "n",
            "pronunciation": "/ˈfæm.əl.i/",
            "meaning": "gia đình"
        },
        "famous": {
            "type": "adj",
            "pronunciation": "/ˈfeɪ.məs/",
            "meaning": "nổi tiếng"
        },
        "far": {
            "type": "adv",
            "pronunciation": "/fɑːr/",
            "meaning": "xa"
        },
        "farm": {
            "type": "n",
            "pronunciation": "/fɑːrm/",
            "meaning": "nông trại"
        },
        "father": {
            "type": "n",
            "pronunciation": "/ˈfɑː.ðɚ/",
            "meaning": "cha"
        },
        "fast": {
            "type": "adj",
            "pronunciation": "/fæst/",
            "meaning": "nhanh"
        },
        "fat": {
            "type": "adj, n",
            "pronunciation": "/fæt/",
            "meaning": "béo, mập; chất béo"
        },
        "fault": {
            "type": "n",
            "pronunciation": "/fɑːlt/",
            "meaning": "lỗi, sai lầm"
        },
        "fear": {
            "type": "n, v",
            "pronunciation": "/fɪr/",
            "meaning": "nỗi sợ; sợ, hoảng sợ"
        },
        "feed": {
            "type": "v",
            "pronunciation": "/fiːd/",
            "meaning": "cho ăn, nuôi"
        },
        "feel": {
            "type": "v",
            "pronunciation": "/fiːl/",
            "meaning": "cảm thấy"
        },
        "female": {
            "type": "adj, n",
            "pronunciation": "/ˈfiː.meɪl/",
            "meaning": "nữ, cái, đực"
        },
        "fever": {
            "type": "n",
            "pronunciation": "/ˈfiː.vɚ/",
            "meaning": "cơn sốt"
        },
        "few": {
            "type": "det, pron",
            "pronunciation": "/fjuː/",
            "meaning": "ít, một ít"
        },
        "field": {
            "type": "n",
            "pronunciation": "/fild/",
            "meaning": "cánh đồng, đồng cỏ"
        },
        "fight": {
            "type": "v",
            "pronunciation": "/faɪt/",
            "meaning": "chiến đấu, đấu tranh"
        },
        "fill": {
            "type": "v",
            "pronunciation": "/fɪl/",
            "meaning": "làm đầy, lấp đầy"
        },
        "find": {
            "type": "v",
            "pronunciation": "/faɪnd/",
            "meaning": "tìm thấy"
        },
        "fine": {
            "type": "adj",
            "pronunciation": "/faɪn/",
            "meaning": "tốt, tốt đẹp"
        },
        "finger": {
            "type": "n",
            "pronunciation": "/ˈfɪŋ.ɡɚ/",
            "meaning": "ngón tay"
        },
        "finish": {
            "type": "v",
            "pronunciation": "/ˈfɪn.ɪʃ/",
            "meaning": "hoàn thành"
        },
        "fire": {
            "type": "n, v",
            "pronunciation": "/faɪr/",
            "meaning": "lửa; bắn, đốt cháy"
        },
        "first": {
            "type": "adj, adv",
            "pronunciation": "/fɝːst/",
            "meaning": "đầu tiên, thứ nhất"
        },
        "fish": {
            "type": "n, v",
            "pronunciation": "/fɪʃ/",
            "meaning": "cá; câu cá"
        },
        "five": {
            "type": "num",
            "pronunciation": "/faɪv/",
            "meaning": "số năm"
        },
        "fix": {
            "type": "v",
            "pronunciation": "/fɪks/",
            "meaning": "sửa, tu bổ"
        },
        "flag": {
            "type": "n",
            "pronunciation": "/flæɡ/",
            "meaning": "cờ, lá cờ"
        },
        "floor": {
            "type": "n",
            "pronunciation": "/flɔːr/",
            "meaning": "sàn nhà"
        },
        "flower": {
            "type": "n",
            "pronunciation": "/ˈflaʊ.ɚ/",
            "meaning": "hoa, hoa cúc"
        },
        "fly": {
            "type": "v",
            "pronunciation": "/flaɪ/",
            "meaning": "bay"
        },
        "fold": {
            "type": "v",
            "pronunciation": "/foʊld/",
            "meaning": "gấp lại, xếp lại"
        },
        "follow": {
            "type": "v",
            "pronunciation": "/ˈfɑː.loʊ/",
            "meaning": "theo đuổi, đi theo"
        },
        "food": {
            "type": "n",
            "pronunciation": "/fuːd/",
            "meaning": "thức ăn"
        },
        "fool": {
            "type": "n, v",
            "pronunciation": "/fuːl/",
            "meaning": "kẻ dại dột, người ngu; đánh lừa"
        },
        "foot": {
            "type": "n",
            "pronunciation": "/fʊt/",
            "meaning": "bàn chân"
        },
        "football": {
            "type": "n",
            "pronunciation": "/ˈfʊtˌbɑːl/",
            "meaning": "bóng đá, bóng bàn chân"
        },
        "for": {
            "type": "prep",
            "pronunciation": "/fɔːr/",
            "meaning": "vì, cho"
        },
        "force": {
            "type": "n",
            "pronunciation": "/fɔːrs/",
            "meaning": "lực, sức mạnh"
        },
        "foreign": {
            "type": "adj",
            "pronunciation": "/ˈfɔːr.ən/",
            "meaning": "nước ngoài"
        },
        "forest": {
            "type": "n",
            "pronunciation": "/ˈfɔːr.ɪst/",
            "meaning": "rừng"
        },
        "forget": {
            "type": "v",
            "pronunciation": "/fɚˈɡet/",
            "meaning": "quên"
        },
        "forgive": {
            "type": "v",
            "pronunciation": "/fərˈɡɪv/",
            "meaning": "tha thứ"
        },
        "fork": {
            "type": "n",
            "pronunciation": "/fɔːrk/",
            "meaning": "cái nĩa"
        },
        "form": {
            "type": "n, v",
            "pronunciation": "/fɔːrm/",
            "meaning": "hình thức; hình thành, tạo ra"
        },
        "fortune": {
            "type": "n",
            "pronunciation": "/ˈfɔːr.tʃən/",
            "meaning": "vận may, số phận"
        },
        "forward": {
            "type": "adv",
            "pronunciation": "/ˈfɔːr.wɚd/",
            "meaning": "về phía trước, tới"
        },
        "four": {
            "type": "num",
            "pronunciation": "/fɔːr/",
            "meaning": "số bốn"
        },
        "fourteen": {
            "type": "num",
            "pronunciation": "/ˌfɔːrˈtiːn/",
            "meaning": "số mười bốn"
        },
        "fourth": {
            "type": "num, adj",
            "pronunciation": "/fɔːrθ/",
            "meaning": "thứ tư"
        },
        "fox": {
            "type": "n",
            "pronunciation": "/fɑːks/",
            "meaning": "con cáo"
        },
        "freeze": {
            "type": "v",
            "pronunciation": "/friːz/",
            "meaning": "đông lại, đóng băng"
        },
        "fresh": {
            "type": "adj",
            "pronunciation": "/freʃ/",
            "meaning": "tươi, mới"
        },
        "friend": {
            "type": "n",
            "pronunciation": "/frend/",
            "meaning": "bạn bè"
        },
        "friendly": {
            "type": "adj",
            "pronunciation": "/ˈfrend.li/",
            "meaning": "thân thiện, hiền lành"
        },
        "from": {
            "type": "prep",
            "pronunciation": "/frʌm/",
            "meaning": "từ, từ phía, từ bên"
        },
        "front": {
            "type": "n, adj",
            "pronunciation": "/frʌnt/",
            "meaning": "mặt trước; phía trước"
        },
        "fruit": {
            "type": "n",
            "pronunciation": "/fruːt/",
            "meaning": "trái cây"
        },
        "full": {
            "type": "adj",
            "pronunciation": "/fʊl/",
            "meaning": "đầy, tròn, đầy đủ"
        },
        "fun": {
            "type": "n",
            "pronunciation": "/fʌn/",
            "meaning": "niềm vui, trò vui"
        },
        "funny": {
            "type": "adj",
            "pronunciation": "/ˈfʌn.i/",
            "meaning": "buồn cười, hài hước"
        },
        "fur": {
            "type": "n",
            "pronunciation": "/fɝː/",
            "meaning": "bộ lông"
        },
        "future": {
            "type": "n",
            "pronunciation": "/ˈfjuː.tʃɚ/",
            "meaning": "tương lai"
        },
        "game": {
            "type": "n",
            "pronunciation": "/ɡeɪm/",
            "meaning": "trò chơi"
        },
        "garden": {
            "type": "n",
            "pronunciation": "/ˈɡɑːr.dən/",
            "meaning": "vườn"
        },
        "gas": {
            "type": "n",
            "pronunciation": "/ɡæs/",
            "meaning": "khí, ga"
        },
        "gate": {
            "type": "n",
            "pronunciation": "/ɡeɪt/",
            "meaning": "cổng"
        },
        "gather": {
            "type": "v",
            "pronunciation": "/ˈɡæð.ɚ/",
            "meaning": "tập hợp, thu thập"
        },
        "general": {
            "type": "adj, n",
            "pronunciation": "/ˈdʒen.ɚ.əl/",
            "meaning": "tổng quát, chung; tướng, tổng tư lệnh"
        },
        "gentleman": {
            "type": "n",
            "pronunciation": "/ˈdʒen.t̬əl.mən/",
            "meaning": "ngài, ông, quý ông"
        },
        "get": {
            "type": "v",
            "pronunciation": "/ɡet/",
            "meaning": "nhận được, có được"
        },
        "gift": {
            "type": "n",
            "pronunciation": "/ɡɪft/",
            "meaning": "quà tặng"
        },
        "girl": {
            "type": "n",
            "pronunciation": "/ɡɜːrl/",
            "meaning": "con gái, cô gái"
        },
        "give": {
            "type": "v",
            "pronunciation": "/ɡɪv/",
            "meaning": "cho, tặng"
        },
        "glad": {
            "type": "adj",
            "pronunciation": "/ɡlæd/",
            "meaning": "vui mừng, hài lòng"
        },
        "glass": {
            "type": "n",
            "pronunciation": "/ɡlæs/",
            "meaning": "cốc, ly"
        },
        "go": {
            "type": "v",
            "pronunciation": "/ɡoʊ/",
            "meaning": "đi, đi lại"
        },
        "goat": {
            "type": "n",
            "pronunciation": "/ɡoʊt/",
            "meaning": "con dê"
        },
        "god": {
            "type": "n",
            "pronunciation": "/ɡɑːd/",
            "meaning": "thiên đàng, chúa trời"
        },
        "gold": {
            "type": "n",
            "pronunciation": "/ɡoʊld/",
            "meaning": "vàng"
        },
        "good": {
            "type": "adj",
            "pronunciation": "/ɡʊd/",
            "meaning": "tốt"
        },
        "goodbye": {
            "type": "ex",
            "pronunciation": "/ɡʊdˈbaɪ/",
            "meaning": "tạm biệt"
        },
        "grandfather": {
            "type": "n",
            "pronunciation": "/ˈɡrænˌfɑː.ðɚ/",
            "meaning": "ông nội"
        },
        "grandmother": {
            "type": "n",
            "pronunciation": "/ˈɡrænˌmʌð.ɚ/",
            "meaning": "bà nội"
        },
        "grass": {
            "type": "n",
            "pronunciation": "/ɡræs/",
            "meaning": "cỏ"
        },
        "great": {
            "type": "adj",
            "pronunciation": "/ɡreɪt/",
            "meaning": "tuyệt vời, vĩ đại"
        },
        "green": {
            "type": "adj, n",
            "pronunciation": "/ɡriːn/",
            "meaning": "xanh lá cây, màu xanh"
        },
        "grey": {
            "type": "adj, n",
            "pronunciation": "/ɡreɪ/",
            "meaning": "xám"
        },
        "ground": {
            "type": "n",
            "pronunciation": "/ɡraʊnd/",
            "meaning": "mặt đất, đất"
        },
        "group": {
            "type": "n",
            "pronunciation": "/ɡruːp/",
            "meaning": "nhóm, đoàn, tập đoàn"
        },
        "grow": {
            "type": "v",
            "pronunciation": "/ɡroʊ/",
            "meaning": "mọc, phát triển, trưởng thành"
        },
        "guard": {
            "type": "n, v",
            "pronunciation": "/ɡɑːrd/",
            "meaning": "người gác, linh gác; bảo vệ, gác"
        },
        "guess": {
            "type": "v, n",
            "pronunciation": "/ɡes/",
            "meaning": "đoán, ước, đoán xem; sự đoán, ước"
        },
        "guest": {
            "type": "n",
            "pronunciation": "/ɡest/",
            "meaning": "khách, khách mời"
        },
        "guide": {
            "type": "n, v",
            "pronunciation": "/ɡaɪd/",
            "meaning": "hướng dẫn viên, cẩm nang; hướng dẫn"
        },
        "guilty": {
            "type": "adj",
            "pronunciation": "/ˈɡɪl.t̬i/",
            "meaning": "có tội, có lỗi, cảm thấy tội lỗi"
        },
        "gun": {
            "type": "n",
            "pronunciation": "/ɡʌn/",
            "meaning": "súng"
        },
        "hair": {
            "type": "n",
            "pronunciation": "/her/",
            "meaning": "tóc"
        },
        "hairdresser": {
            "type": "n",
            "pronunciation": "/ˈherˌdrɛs.ɚ/",
            "meaning": "thợ làm tóc, thợ cắt tóc"
        },
        "half": {
            "type": "det, pron, n",
            "pronunciation": "/hæf/",
            "meaning": "nửa"
        },
        "hall": {
            "type": "n",
            "pronunciation": "/hɑːl/",
            "meaning": "hành lang, phòng lớn"
        },
        "hammer": {
            "type": "n",
            "pronunciation": "/ˈhæm.ɚ/",
            "meaning": "búa"
        },
        "hand": {
            "type": "n",
            "pronunciation": "/hænd/",
            "meaning": "tay"
        },
        "handle": {
            "type": "v, n",
            "pronunciation": "/ˈhæn.dəl/",
            "meaning": "xử lý, đối phó, điều khiển; tay cầm, núm tay"
        },
        "hang": {
            "type": "v",
            "pronunciation": "/hæŋ/",
            "meaning": "treo, mắc"
        },
        "happen": {
            "type": "v",
            "pronunciation": "/ˈhæp.ən/",
            "meaning": "xảy ra, xảy đến"
        },
        "happy": {
            "type": "adj",
            "pronunciation": "/ˈhæp.i/",
            "meaning": "hạnh phúc, vui vẻ",
            "example": ""
        },
        "hard": {
            "type": "adj",
            "pronunciation": "/hɑːrd/",
            "meaning": "khó khăn, khó khăn; cứng, cứng rắn"
        },
        "hat": {
            "type": "n",
            "pronunciation": "/hæt/",
            "meaning": "mũ"
        },
        "hate": {
            "type": "v",
            "pronunciation": "/heɪt/",
            "meaning": "ghét, căm hận"
        },
        "have": {
            "type": "v",
            "pronunciation": "/hæv/",
            "meaning": "có, sở hữu"
        },
        "he": {
            "type": "pron",
            "pronunciation": "/hiː/",
            "meaning": "anh ấy, ông ấy"
        },
        "head": {
            "type": "n",
            "pronunciation": "/hed/",
            "meaning": "đầu"
        },
        "headache": {
            "type": "n",
            "pronunciation": "/ˈhedˌeɪk/",
            "meaning": "đau đầu"
        },
        "healthy": {
            "type": "adj",
            "pronunciation": "/ˈhel.θi/",
            "meaning": "khỏe mạnh"
        },
        "hear": {
            "type": "v",
            "pronunciation": "/hɪr/",
            "meaning": "nghe"
        },
        "heart": {
            "type": "n",
            "pronunciation": "/hɑːrt/",
            "meaning": "trái tim"
        },
        "heat": {
            "type": "n, v",
            "pronunciation": "/hiːt/",
            "meaning": "nhiệt độ; làm nóng"
        },
        "heaven": {
            "type": "n",
            "pronunciation": "/ˈhev.ən/",
            "meaning": "thiên đàng"
        },
        "heavy": {
            "type": "adj",
            "pronunciation": "/ˈhev.i/",
            "meaning": "nặng, nặng nề"
        },
        "hello": {
            "type": "ex",
            "pronunciation": "/həˈloʊ/",
            "meaning": "xin chào, chào"
        },
        "help": {
            "type": "v, n",
            "pronunciation": "/help/",
            "meaning": "giúp đỡ, giúp ích, giúp sức; sự giúp đỡ"
        },
        "here": {
            "type": "adv",
            "pronunciation": "/hɪr/",
            "meaning": "ở đây"
        },
        "hero": {
            "type": "n",
            "pronunciation": "/ˈhɪr.oʊ/",
            "meaning": "người anh hùng, nhân vật huyền thoại"
        },
        "hers": {
            "type": "pron",
            "pronunciation": "/hɝːz/",
            "meaning": "của cô ấy"
        },
        "herself": {
            "type": "pron",
            "pronunciation": "/hɝːˈself/",
            "meaning": "chính cô ấy"
        },
        "hide": {
            "type": "v",
            "pronunciation": "/haɪd/",
            "meaning": "giấu, ẩn, che đậy"
        },
        "high": {
            "type": "adj",
            "pronunciation": "/haɪ/",
            "meaning": "cao, đỉnh"
        },
        "hill": {
            "type": "n",
            "pronunciation": "/hɪl/",
            "meaning": "đồi"
        },
        "him": {
            "type": "pron",
            "pronunciation": "/hɪm/",
            "meaning": "anh ấy, ông ấy"
        },
        "himself": {
            "type": "pron",
            "pronunciation": "/hɪmˈself/",
            "meaning": "chính anh ấy, chính ông ấy"
        },
        "his": {
            "type": "pron",
            "pronunciation": "/hɪz/",
            "meaning": "của anh ấy, của ông ấy"
        },
        "history": {
            "type": "n",
            "pronunciation": "/ˈhɪs.tər.i/",
            "meaning": "lịch sử"
        },
        "hit": {
            "type": "v, n",
            "pronunciation": "/hɪt/",
            "meaning": "đánh, đập; sự đánh, cú đập"
        },
        "hold": {
            "type": "v, n",
            "pronunciation": "/hoʊld/",
            "meaning": "cầm, nắm, giữ; sự cầm, sự nắm giữ"
        },
        "hole": {
            "type": "n",
            "pronunciation": "/hoʊl/",
            "meaning": "lỗ"
        },
        "holiday": {
            "type": "n",
            "pronunciation": "/ˈhɑː.lə.deɪ/",
            "meaning": "ngày lễ"
        },
        "home": {
            "type": "n",
            "pronunciation": "/hoʊm/",
            "meaning": "nhà"
        },
        "honey": {
            "type": "n",
            "pronunciation": "/ˈhʌn.i/",
            "meaning": "mật ong"
        },
        "hook": {
            "type": "n, v",
            "pronunciation": "/hʊk/",
            "meaning": "móc; móc vào, móc vào"
        },
        "hope": {
            "type": "v, n",
            "pronunciation": "/hoʊp/",
            "meaning": "hy vọng, hi vọng; sự hy vọng"
        },
        "horrible": {
            "type": "adj",
            "pronunciation": "/ˈhɑːr.ə.bəl/",
            "meaning": "khủng khiếp, tồi tệ"
        },
        "horse": {
            "type": "n",
            "pronunciation": "/hɔːrs/",
            "meaning": "con ngựa"
        },
        "hospital": {
            "type": "n",
            "pronunciation": "/ˈhɑː.spɪ.t̬əl/",
            "meaning": "bệnh viện"
        },
        "host": {
            "type": "n, v",
            "pronunciation": "/hoʊst/",
            "meaning": "chủ, trình bày, dẫn dắt; mặt trận"
        },
        "hot": {
            "type": "adj",
            "pronunciation": "/hɑːt/",
            "meaning": "nóng, nóng bức"
        },
        "hotel": {
            "type": "n",
            "pronunciation": "/hoʊˈtel/",
            "meaning": "khách sạn"
        },
        "hour": {
            "type": "n",
            "pronunciation": "/aʊər/",
            "meaning": "giờ"
        },
        "house": {
            "type": "n",
            "pronunciation": "/haʊs/",
            "meaning": "ngôi nhà"
        },
        "how": {
            "type": "adv",
            "pronunciation": "/haʊ/",
            "meaning": "thế nào"
        },
        "however": {
            "type": "adv",
            "pronunciation": "/haʊˈev.ɚ/",
            "meaning": "tuy nhiên, tuy thế"
        },
        "huge": {
            "type": "adj",
            "pronunciation": "/hjuːdʒ/",
            "meaning": "rộng lớn, to lớn"
        },
        "human": {
            "type": "adj, n",
            "pronunciation": "/ˈhjuː.mən/",
            "meaning": "con người, loài người"
        },
        "hunger": {
            "type": "n",
            "pronunciation": "/ˈhʌŋ.ɡɚ/",
            "meaning": "đói, cảm giác đói"
        },
        "hungry": {
            "type": "adj",
            "pronunciation": "/ˈhʌŋ.ɡri/",
            "meaning": "đói, đói bụng"
        },
        "hunt": {
            "type": "v, n",
            "pronunciation": "/hʌnt/",
            "meaning": "săn bắn, săn; cuộc săn bắn"
        },
        "hurry": {
            "type": "v, n",
            "pronunciation": "/ˈhɝː.i/",
            "meaning": "vội vã, gấp rút; sự vội vã, sự gấp rút"
        },
        "hurt": {
            "type": "v, n",
            "pronunciation": "/hɝːt/",
            "meaning": "làm đau, làm tổn thương; sự đau đớn"
        },
        "husband": {
            "type": "n",
            "pronunciation": "/ˈhʌz.bənd/",
            "meaning": "chồng"
        },
        "I": {
            "type": "pron",
            "pronunciation": "/aɪ/",
            "meaning": "tôi"
        },
        "ice": {
            "type": "n",
            "pronunciation": "/aɪs/",
            "meaning": "đá"
        },
        "idea": {
            "type": "n",
            "pronunciation": "/aɪˈdiː.ə/",
            "meaning": "ý tưởng, suy nghĩ"
        },
        "if": {
            "type": "conj",
            "pronunciation": "/ɪf/",
            "meaning": "nếu"
        },
        "ill": {
            "type": "adj",
            "pronunciation": "/ɪl/",
            "meaning": "ốm, không khỏe"
        },
        "important": {
            "type": "adj",
            "pronunciation": "/ɪmˈpɔːr.tənt/",
            "meaning": "quan trọng"
        },
        "impossible": {
            "type": "adj",
            "pronunciation": "/ɪmˈpɑː.sə.bəl/",
            "meaning": "không thể, không thể nào"
        },
        "improve": {
            "type": "v",
            "pronunciation": "/ɪmˈpruːv/",
            "meaning": "cải thiện, làm tốt hơn"
        },
        "in": {
            "type": "prep",
            "pronunciation": "/ɪn/",
            "meaning": "ở trong, bên trong"
        },
        "include": {
            "type": "v",
            "pronunciation": "/ɪnˈkluːd/",
            "meaning": "bao gồm, tính cả"
        },
        "income": {
            "type": "n",
            "pronunciation": "/ˈɪn.kʌm/",
            "meaning": "thu nhập"
        },
        "increase": {
            "type": "v, n",
            "pronunciation": "/ɪnˈkriːs/",
            "meaning": "tăng lên; sự tăng lên"
        },
        "indeed": {
            "type": "adv",
            "pronunciation": "/ɪnˈdid/",
            "meaning": "thật vậy, quả thực"
        },
        "industry": {
            "type": "n",
            "pronunciation": "/ˈɪn.dəs.tri/",
            "meaning": "công nghiệp"
        },
        "influence": {
            "type": "n, v",
            "pronunciation": "/ˈɪn.flu.əns/",
            "meaning": "ảnh hưởng, ảnh hưởng; tác động"
        },
        "inform": {
            "type": "v",
            "pronunciation": "/ɪnˈfɔːrm/",
            "meaning": "báo cho biết, thông báo"
        },
        "information": {
            "type": "n",
            "pronunciation": "/ˌɪn.fɚˈmeɪ.ʃən/",
            "meaning": "thông tin, tin tức"
        },
        "inside": {
            "type": "prep, adv, adj, n",
            "pronunciation": "/ɪnˈsaɪd/",
            "meaning": "trong, phía trong; ở trong; bên trong"
        },
        "instead": {
            "type": "adv",
            "pronunciation": "/ɪnˈsted/",
            "meaning": "thay vì"
        },
        "institute": {
            "type": "n, v",
            "pronunciation": "/ˈɪn.stɪˌtuːt/",
            "meaning": "học viện, viện; thành lập, đặt ra"
        },
        "institution": {
            "type": "n",
            "pronunciation": "/ˌɪn.stəˈtuː.ʃən/",
            "meaning": "cơ quan, tổ chức"
        },
        "instruction": {
            "type": "n",
            "pronunciation": "/ɪnˈstrʌk.ʃən/",
            "meaning": "sự hướng dẫn, sự chỉ dẫn, hướng dẫn"
        },
        "instrument": {
            "type": "n",
            "pronunciation": "/ˈɪn.strə.mənt/",
            "meaning": "dụng cụ, công cụ"
        },
        "insult": {
            "type": "v, n",
            "pronunciation": "/ɪnˈsʌlt/",
            "meaning": "xúc phạm, lăng mạ; sự xúc phạm"
        },
        "intelligence": {
            "type": "n",
            "pronunciation": "/ɪnˈtel.ə.dʒəns/",
            "meaning": "trí tuệ, trí thông minh"
        },
        "intelligent": {
            "type": "adj",
            "pronunciation": "/ɪnˈtel.ə.dʒənt/",
            "meaning": "thông minh, trí tuệ"
        },
        "intend": {
            "type": "v",
            "pronunciation": "/ɪnˈtend/",
            "meaning": "dự định, có ý định"
        },
        "interest": {
            "type": "n",
            "pronunciation": "/ˈɪn.trəst/",
            "meaning": "sự quan tâm, sự quan tâm; lợi ích"
        },
        "interesting": {
            "type": "adj",
            "pronunciation": "/ˈɪn.trə.stɪŋ/",
            "meaning": "thú vị, hấp dẫn"
        },
        "international": {
            "type": "adj",
            "pronunciation": "/ˌɪn.t̬ɚˈnæʃ.ən.əl/",
            "meaning": "quốc tế"
        },
        "internet": {
            "type": "n",
            "pronunciation": "/ˈɪn.t̬ɚ.net/",
            "meaning": "mạng internet"
        },
        "interview": {
            "type": "n, v",
            "pronunciation": "/ˈɪn.t̬ɚ.vjuː/",
            "meaning": "phỏng vấn, cuộc phỏng vấn; phỏng vấn, mời phỏng vấn"
        },
        "into": {
            "type": "prep",
            "pronunciation": "/ˈɪn.tuː/",
            "meaning": "vào trong, đến trong"
        },
        "introduce": {
            "type": "v",
            "pronunciation": "/ˌɪn.trəˈdjuːs/",
            "meaning": "giới thiệu"
        },
        "invent": {
            "type": "v",
            "pronunciation": "/ɪnˈvent/",
            "meaning": "phát minh, sáng chế"
        },
        "invitation": {
            "type": "n",
            "pronunciation": "/ˌɪn.vəˈteɪ.ʃən/",
            "meaning": "lời mời"
        },
        "invite": {
            "type": "v",
            "pronunciation": "/ɪnˈvaɪt/",
            "meaning": "mời"
        },
        "involve": {
            "type": "v",
            "pronunciation": "/ɪnˈvɑːlv/",
            "meaning": "liên quan, dính líu; làm cho dính líu, cuốn vào"
        },
        "iron": {
            "type": "n",
            "pronunciation": "/ˈaɪ.ɚn/",
            "meaning": "sắt"
        },
        "island": {
            "type": "n",
            "pronunciation": "/ˈaɪ.lənd/",
            "meaning": "hòn đảo"
        },
        "issue": {
            "type": "n, v",
            "pronunciation": "/ˈɪʃ.uː/",
            "meaning": "vấn đề, mối quan tâm, mối lo âu; phát ra, đưa ra"
        },
        "it": {
            "type": "pron",
            "pronunciation": "/ɪt/",
            "meaning": "nó, nó, nó"
        },
        "its": {
            "type": "pron, det",
            "pronunciation": "/ɪts/",
            "meaning": "của nó"
        },
        "itself": {
            "type": "pron",
            "pronunciation": "/ɪtˈself/",
            "meaning": "chính nó"
        },
        "jacket": {
            "type": "n",
            "pronunciation": "/ˈdʒæk.ɪt/",
            "meaning": "áo khoác"
        },
        "jam": {
            "type": "n, v",
            "pronunciation": "/dʒæm/",
            "meaning": "mứt; kẹt, mắc kẹt"
        },
        "job": {
            "type": "n",
            "pronunciation": "/dʒɑːb/",
            "meaning": "công việc, việc làm"
        },
        "join": {
            "type": "v",
            "pronunciation": "/dʒɔɪn/",
            "meaning": "tham gia, gia nhập"
        },
        "joke": {
            "type": "n, v",
            "pronunciation": "/dʒoʊk/",
            "meaning": "trò đùa, chuyện cười; nói đùa"
        },
        "journey": {
            "type": "n",
            "pronunciation": "/ˈdʒɝː.ni/",
            "meaning": "cuộc hành trình"
        },
        "judge": {
            "type": "n, v",
            "pronunciation": "/dʒʌdʒ/",
            "meaning": "thẩm phán, quan tòa; xét xử, đánh giá"
        },
        "juice": {
            "type": "n",
            "pronunciation": "/dʒus/",
            "meaning": "nước ép"
        },
        "jump": {
            "type": "v, n",
            "pronunciation": "/dʒʌmp/",
            "meaning": "nhảy; sự nhảy"
        },
        "just": {
            "type": "adv, adj",
            "pronunciation": "/dʒʌst/",
            "meaning": "chỉ, chỉ vừa mới; công bằng, đúng đắn"
        },
        "justice": {
            "type": "n",
            "pronunciation": "/ˈdʒʌs.tɪs/",
            "meaning": "công bằng, sự công bằng"
        },
        "keep": {
            "type": "v",
            "pronunciation": "/kip/",
            "meaning": "giữ, bảo quản"
        },
        "key": {
            "type": "n",
            "pronunciation": "/kiː/",
            "meaning": "chìa khóa, chìa khóa"
        },
        "kick": {
            "type": "v, n",
            "pronunciation": "/kɪk/",
            "meaning": "đá, đạp; cú đá, cú đạp"
        },
        "kid": {
            "type": "n",
            "pronunciation": "/kɪd/",
            "meaning": "đứa trẻ"
        },
        "kill": {
            "type": "v",
            "pronunciation": "/kɪl/",
            "meaning": "giết"
        },
        "kind": {
            "type": "adj, n",
            "pronunciation": "/kaɪnd/",
            "meaning": "tốt bụng, tử tế; loại, kiểu"
        },
        "king": {
            "type": "n",
            "pronunciation": "/kɪŋ/",
            "meaning": "vua, chúa"
        },
        "kiss": {
            "type": "v, n",
            "pronunciation": "/kɪs/",
            "meaning": "hôn; cái hôn"
        },
        "kitchen": {
            "type": "n",
            "pronunciation": "/ˈkɪtʃ.ən/",
            "meaning": "nhà bếp"
        },
        "knee": {
            "type": "n",
            "pronunciation": "/niː/",
            "meaning": "đầu gối"
        },
        "knife": {
            "type": "n",
            "pronunciation": "/naɪf/",
            "meaning": "con dao"
        },
        "knock": {
            "type": "v, n",
            "pronunciation": "/nɑːk/",
            "meaning": "gõ, đánh vào; tiếng đánh, tiếng gõ"
        },
        "know": {
            "type": "v",
            "pronunciation": "/noʊ/",
            "meaning": "biết, hiểu"
        },
        "knowledge": {
            "type": "n",
            "pronunciation": "/ˈnɑː.lɪdʒ/",
            "meaning": "kiến thức, hiểu biết"
        },
        "lack": {
            "type": "v, n",
            "pronunciation": "/læk/",
            "meaning": "thiếu, không có; sự thiếu, sự không có"
        },
        "lady": {
            "type": "n",
            "pronunciation": "/ˈleɪ.di/",
            "meaning": "bà, phu nhân, cô"
        },
        "lake": {
            "type": "n",
            "pronunciation": "/leɪk/",
            "meaning": "hồ"
        },
        "land": {
            "type": "n, v",
            "pronunciation": "/lænd/",
            "meaning": "đất đai, đất; đổ bộ, hạ cánh"
        },
        "language": {
            "type": "n",
            "pronunciation": "/ˈlæŋ.ɡwɪdʒ/",
            "meaning": "ngôn ngữ, tiếng nói"
        },
        "large": {
            "type": "adj",
            "pronunciation": "/lɑːrdʒ/",
            "meaning": "lớn, rộng, to lớn"
        },
        "last": {
            "type": "adj, adv, v",
            "pronunciation": "/læst/",
            "meaning": "cuối cùng, mới nhất; cuối cùng, sau cùng; kéo dài"
        },
        "late": {
            "type": "adj, adv",
            "pronunciation": "/leɪt/",
            "meaning": "muộn, chậm; muộn"
        },
        "later": {
            "type": "adv",
            "pronunciation": "/ˈleɪ.t̬ɚ/",
            "meaning": "sau này, sau đó"
        },
        "laugh": {
            "type": "v, n",
            "pronunciation": "/læf/",
            "meaning": "cười; tiếng cười"
        },
        "launch": {
            "type": "v, n",
            "pronunciation": "/lɔːntʃ/",
            "meaning": "khởi động, tung ra; sự phóng"
        },
        "law": {
            "type": "n",
            "pronunciation": "/lɑː/",
            "meaning": "pháp luật"
        },
        "lawyer": {
            "type": "n",
            "pronunciation": "/ˈlɔɪ.ər/",
            "meaning": "luật sư"
        },
        "lay": {
            "type": "v",
            "pronunciation": "/leɪ/",
            "meaning": "đặt, để; (laid, laid)"
        },
        "lead": {
            "type": "v, n",
            "pronunciation": "/liːd/",
            "meaning": "dẫn dắt, lãnh đạo; sự dẫn dắt, sự lãnh đạo"
        },
        "leader": {
            "type": "n",
            "pronunciation": "/ˈliː.dɚ/",
            "meaning": "lãnh đạo, người lãnh đạo"
        },
        "leadership": {
            "type": "n",
            "pronunciation": "/ˈliː.dɚ.ʃɪp/",
            "meaning": "sự lãnh đạo"
        },
        "leaf": {
            "type": "n",
            "pronunciation": "/liːf/",
            "meaning": "lá cây"
        },
        "learn": {
            "type": "v",
            "pronunciation": "/lɝːn/",
            "meaning": "học, học hỏi"
        },
        "least": {
            "type": "adv, det",
            "pronunciation": "/liːst/",
            "meaning": "ít nhất, ít nhất"
        },
        "leather": {
            "type": "n",
            "pronunciation": "/ˈlɛð.ɚ/",
            "meaning": "da (động vật), da"
        },
        "leave": {
            "type": "v, n",
            "pronunciation": "/liːv/",
            "meaning": "rời khỏi, rời đi; sự rời khỏi, sự rời đi"
        },
        "left": {
            "type": "adj, n, adv",
            "pronunciation": "/left/",
            "meaning": "trái; phía trái; ở bên trái"
        },
        "leg": {
            "type": "n",
            "pronunciation": "/leɡ/",
            "meaning": "chân, chân"
        },
        "legal": {
            "type": "adj",
            "pronunciation": "/ˈliː.ɡəl/",
            "meaning": "pháp lý"
        },
        "lend": {
            "type": "v",
            "pronunciation": "/lend/",
            "meaning": "cho vay, cho mượn"
        },
        "length": {
            "type": "n",
            "pronunciation": "/leŋkθ/",
            "meaning": "chiều dài"
        },
        "less": {
            "type": "det, pron, adv",
            "pronunciation": "/les/",
            "meaning": "ít hơn, hơn"
        },
        "let": {
            "type": "v",
            "pronunciation": "/let/",
            "meaning": "để, để cho, cho phép"
        },
        "letter": {
            "type": "n",
            "pronunciation": "/ˈlet̬.ɚ/",
            "meaning": "chữ cái, chữ"
        },
        "level": {
            "type": "n, v, adj",
            "pronunciation": "/ˈlev.əl/",
            "meaning": "mức, trình độ; làm cho bằng phẳng; bằng phẳng"
        },
        "library": {
            "type": "n",
            "pronunciation": "/ˈlaɪ.brer.i/",
            "meaning": "thư viện"
        },
        "lie": {
            "type": "v, n",
            "pronunciation": "/laɪ/",
            "meaning": "nói dối, nói dối; sự nói dối"
        },
        "life": {
            "type": "n",
            "pronunciation": "/laɪf/",
            "meaning": "cuộc sống"
        },
        "lift": {
            "type": "v, n",
            "pronunciation": "/lɪft/",
            "meaning": "nâng, giơ lên; cái cầu thang, cái thang máy"
        },
        "light": {
            "type": "n, adj, v",
            "pronunciation": "/laɪt/",
            "meaning": "ánh sáng; nhẹ nhàng, thanh nhã; bật, sáng lên"
        },
        "like": {
            "type": "prep, v, adj, n",
            "pronunciation": "/laɪk/",
            "meaning": "giống, như; thích, yêu thích; giống như, như; người giống như, kẻ"
        },
        "likely": {
            "type": "adj, adv",
            "pronunciation": "/ˈlaɪk.li/",
            "meaning": "có khả năng, có thể; có khả năng"
        },
        "limit": {
            "type": "n, v",
            "pronunciation": "/ˈlɪm.ɪt/",
            "meaning": "giới hạn, hạn chế; hạn chế, giới hạn"
        },
        "line": {
            "type": "n, v",
            "pronunciation": "/laɪn/",
            "meaning": "dòng, hàng; đứng thành hàng"
        },
        "link": {
            "type": "v, n",
            "pronunciation": "/lɪŋk/",
            "meaning": "liên kết; mắc kết, mắc cằm"
        },
        "lip": {
            "type": "n",
            "pronunciation": "/lɪp/",
            "meaning": "môi"
        },
        "liquid": {
            "type": "n, adj",
            "pronunciation": "/ˈlɪk.wɪd/",
            "meaning": "chất lỏng; lỏng, đặc"
        },
        "list": {
            "type": "n, v",
            "pronunciation": "/lɪst/",
            "meaning": "danh sách, danh sách; lập danh sách, ghi vào danh sách"
        },
        "listen": {
            "type": "v",
            "pronunciation": "/ˈlɪs.ən/",
            "meaning": "nghe, lắng nghe"
        },
        "literature": {
            "type": "n",
            "pronunciation": "/ˈlɪt̬.ɚ.ə.tʃʊr/",
            "meaning": "văn học"
        },
        "little": {
            "type": "adj, det, pron",
            "pronunciation": "/ˈlɪt̬.əl/",
            "meaning": "nhỏ, bé; một chút, một ít; một chút, một ít"
        },
        "live": {
            "type": "v, adj, adv",
            "pronunciation": "/lɪv/",
            "meaning": "sống, ở, cư trú; sống, sống lại; trực tiếp, trực tiếp"
        },
        "load": {
            "type": "v, n",
            "pronunciation": "/loʊd/",
            "meaning": "tải, chất, nạp; gánh nặng, tải trọng"
        },
        "loan": {
            "type": "n, v",
            "pronunciation": "/loʊn/",
            "meaning": "sự cho vay, khoản vay; cho vay, vay mượn"
        },
        "local": {
            "type": "adj",
            "pronunciation": "/ˈloʊ.kəl/",
            "meaning": "địa phương, địa bàn"
        },
        "location": {
            "type": "n",
            "pronunciation": "/loʊˈkeɪ.ʃən/",
            "meaning": "vị trí"
        },
        "lock": {
            "type": "v, n",
            "pronunciation": "/lɑːk/",
            "meaning": "khóa; cái khóa"
        },
        "lonely": {
            "type": "adj",
            "pronunciation": "/ˈloʊn.li/",
            "meaning": "cô đơn"
        },
        "long": {
            "type": "adj, adv, v",
            "pronunciation": "/lɔːŋ/",
            "meaning": "dài, lâu; lâu; mong chờ, khao khát"
        },
        "look": {
            "type": "v, n",
            "pronunciation": "/lʊk/",
            "meaning": "nhìn, xem; cái nhìn"
        },
        "lose": {
            "type": "v",
            "pronunciation": "/luːz/",
            "meaning": "mất, đánh mất, mất đi"
        },
        "loss": {
            "type": "n",
            "pronunciation": "/lɑːs/",
            "meaning": "mất, sự mất, mất mát"
        },
        "lot": {
            "type": "n, pron, adv",
            "pronunciation": "/lɑːt/",
            "meaning": "nhiều, rất nhiều; nhiều, rất nhiều; nhiều, hết sức"
        },
        "love": {
            "type": "n, v",
            "pronunciation": "/lʌv/",
            "meaning": "tình yêu, tình cảm; yêu, thích, mến"
        },
        "lovely": {
            "type": "adj",
            "pronunciation": "/ˈlʌv.li/",
            "meaning": "dễ thương, đáng yêu"
        },
        "low": {
            "type": "adj, adv, n",
            "pronunciation": "/loʊ/",
            "meaning": "thấp, bé, ít; thấp, nhỏ, ít; sự thấp, sự bé"
        },
        "luck": {
            "type": "n",
            "pronunciation": "/lʌk/",
            "meaning": "vận may"
        },
        "lucky": {
            "type": "adj",
            "pronunciation": "/ˈlʌk.i/",
            "meaning": "may mắn"
        },
        "lunch": {
            "type": "n",
            "pronunciation": "/lʌntʃ/",
            "meaning": "bữa trưa"
        },
        "machine": {
            "type": "n",
            "pronunciation": "/məˈʃiːn/",
            "meaning": "máy móc"
        },
        "mad": {
            "type": "adj",
            "pronunciation": "/mæd/",
            "meaning": "điên cuồng"
        },
        "magazine": {
            "type": "n",
            "pronunciation": "/ˌmæɡ.əˈzin/",
            "meaning": "tạp chí"
        },
        "mail": {
            "type": "n, v",
            "pronunciation": "/meɪl/",
            "meaning": "thư, thư; gửi thư"
        },
        "main": {
            "type": "adj",
            "pronunciation": "/meɪn/",
            "meaning": "chính, chính"
        },
        "maintain": {
            "type": "v",
            "pronunciation": "/meɪnˈteɪn/",
            "meaning": "duy trì"
        },
        "major": {
            "type": "adj",
            "pronunciation": "/ˈmeɪ.dʒɚ/",
            "meaning": "chính, lớn, chủ yếu"
        },
        "majority": {
            "type": "n",
            "pronunciation": "/məˈdʒɔːr.ə.t̬i/",
            "meaning": "phần lớn, đa số"
        },
        "make": {
            "type": "v",
            "pronunciation": "/meɪk/",
            "meaning": "làm, chế tạo, sản xuất"
        },
        "male": {
            "type": "adj, n",
            "pronunciation": "/meɪl/",
            "meaning": "nam giới, đàn ông; nam giới, đàn ông"
        },
        "mall": {
            "type": "n",
            "pronunciation": "/mɑːl/",
            "meaning": "đại lý, hành lang mua sắm"
        },
        "man": {
            "type": "n",
            "pronunciation": "/mæn/",
            "meaning": "đàn ông, người đàn ông"
        },
        "manage": {
            "type": "v",
            "pronunciation": "/ˈmæn.ɪdʒ/",
            "meaning": "quản lý, điều khiển"
        },
        "management": {
            "type": "n",
            "pronunciation": "/ˈmæn.ɪdʒ.mənt/",
            "meaning": "sự quản lý, sự điều khiển"
        },
        "manager": {
            "type": "n",
            "pronunciation": "/ˈmæn.ɪdʒ.ɚ/",
            "meaning": "người quản lý, người điều khiển"
        },
        "manner": {
            "type": "n",
            "pronunciation": "/ˈmæn.ɚ/",
            "meaning": "cách, cách thức"
        },
        "many": {
            "type": "det, pron",
            "pronunciation": "/ˈmen.i/",
            "meaning": "nhiều, nhiều"
        },
        "map": {
            "type": "n, v",
            "pronunciation": "/mæp/",
            "meaning": "bản đồ, bản đồ; định hình, vẽ"
        },
        "march": {
            "type": "n, v",
            "pronunciation": "/mɑːrtʃ/",
            "meaning": "tháng ba; diễu hành, tiến hành"
        },
        "mark": {
            "type": "n, v",
            "pronunciation": "/mɑːrk/",
            "meaning": "dấu, dấu hiệu; đánh dấu, đánh dấu"
        },
        "market": {
            "type": "n",
            "pronunciation": "/ˈmɑːr.kɪt/",
            "meaning": "thị trường"
        },
        "marriage": {
            "type": "n",
            "pronunciation": "/ˈmær.ɪdʒ/",
            "meaning": "hôn nhân"
        },
        "married": {
            "type": "adj",
            "pronunciation": "/ˈmær.id/",
            "meaning": "đã kết hôn"
        },
        "marry": {
            "type": "v",
            "pronunciation": "/ˈmæri/",
            "meaning": "kết hôn"
        },
        "mass": {
            "type": "n, adj",
            "pronunciation": "/mæs/",
            "meaning": "khối lượng, khối lượng; lớn, khổng lồ"
        },
        "master": {
            "type": "n",
            "pronunciation": "/ˈmæs.tɚ/",
            "meaning": "chủ nhân, thạc sĩ, chủ nhân"
        },
        "match": {
            "type": "n, v",
            "pronunciation": "/mætʃ/",
            "meaning": "trận đấu, trận đấu; kết hợp, so khớp"
        },
        "mate": {
            "type": "n, v",
            "pronunciation": "/meɪt/",
            "meaning": "bạn bè, đồng chí; giao phối"
        },
        "material": {
            "type": "n, adj",
            "pronunciation": "/məˈtɪr.i.əl/",
            "meaning": "nguyên liệu, chất liệu; vật chất"
        },
        "mathematics": {
            "type": "n",
            "pronunciation": "/ˌmæθ.əˈmæt̬.ɪ.ks/",
            "meaning": "toán học"
        },
        "matter": {
            "type": "n, v",
            "pronunciation": "/ˈmæt̬.ɚ/",
            "meaning": "vật chất, chất liệu; làm ảnh hưởng, quan trọng"
        },
        "maximum": {
            "type": "adj, n",
            "pronunciation": "/ˈmæk.sɪ.məm/",
            "meaning": "tối đa, tối đa; tối đa"
        },
        "may": {
            "type": "v, n",
            "pronunciation": "/meɪ/",
            "meaning": "có thể, có thể; tháng năm"
        },
        "maybe": {
            "type": "adv",
            "pronunciation": "/ˈmeɪ.bi/",
            "meaning": "có lẽ, có lẽ"
        },
        "me": {
            "type": "pron",
            "pronunciation": "/miː/",
            "meaning": "tôi, tôi"
        },
        "meal": {
            "type": "n",
            "pronunciation": "/miːl/",
            "meaning": "bữa ăn"
        },
        "mean": {
            "type": "v, adj",
            "pronunciation": "/miːn/",
            "meaning": "có nghĩa, ý nghĩa; keo kiệt, bỉ ổi"
        },
        "meaning": {
            "type": "n",
            "pronunciation": "/ˈmiː.nɪŋ/",
            "meaning": "ý nghĩa"
        },
        "means": {
            "type": "n",
            "pronunciation": "/minz/",
            "meaning": "phương tiện, phương tiện, cách"
        },
        "measure": {
            "type": "v, n",
            "pronunciation": "/ˈmeʒ.ɚ/",
            "meaning": "đo lường, đo lường; biện pháp, cách"
        },
        "meat": {
            "type": "n",
            "pronunciation": "/miːt/",
            "meaning": "thịt"
        },
        "media": {
            "type": "n",
            "pronunciation": "/ˈmiː.di.ə/",
            "meaning": "phương tiện truyền thông"
        },
        "medical": {
            "type": "adj",
            "pronunciation": "/ˈmed.ɪ.kəl/",
            "meaning": "y tế"
        },
        "medicine": {
            "type": "n",
            "pronunciation": "/ˈmed.ɪ.sən/",
            "meaning": "thuốc, y học"
        },
        "meet": {
            "type": "v",
            "pronunciation": "/miːt/",
            "meaning": "gặp, gặp gỡ"
        },
        "meeting": {
            "type": "n",
            "pronunciation": "/ˈmiː.t̬ɪŋ/",
            "meaning": "cuộc họp, cuộc họp"
        },
        "member": {
            "type": "n",
            "pronunciation": "/ˈmem.bɚ/",
            "meaning": "thành viên"
        },
        "membership": {
            "type": "n",
            "pronunciation": "/ˈmem.bɚ.ʃɪp/",
            "meaning": "sự gia nhập, sự gia nhập"
        },
        "memory": {
            "type": "n",
            "pronunciation": "/ˈmem.ər.i/",
            "meaning": "bộ nhớ"
        },
        "mention": {
            "type": "v, n",
            "pronunciation": "/ˈmen.ʃən/",
            "meaning": "đề cập, đề cập; sự đề cập"
        },
        "menu": {
            "type": "n",
            "pronunciation": "/ˈmen.juː/",
            "meaning": "thực đơn"
        },
        "mere": {
            "type": "adj",
            "pronunciation": "/mɪr/",
            "meaning": "chỉ là, chỉ là"
        },
        "mess": {
            "type": "n",
            "pronunciation": "/mes/",
            "meaning": "lộn xộn, rối rắm"
        },
        "message": {
            "type": "n",
            "pronunciation": "/ˈmes.ɪdʒ/",
            "meaning": "tin nhắn"
        },
        "metal": {
            "type": "n",
            "pronunciation": "/ˈmet̬.l/",
            "meaning": "kim loại"
        },
        "method": {
            "type": "n",
            "pronunciation": "/ˈmeθ.əd/",
            "meaning": "phương pháp, phương pháp"
        },
        "middle": {
            "type": "n, adj",
            "pronunciation": "/ˈmɪd.l̩/",
            "meaning": "giữa, ở giữa; giữa, trung tâm"
        },
        "might": {
            "type": "modal v",
            "pronunciation": "/maɪt/",
            "meaning": "có thể, có lẽ"
        },
        "mild": {
            "type": "adj",
            "pronunciation": "/maɪld/",
            "meaning": "nhẹ, dịu dàng"
        },
        "mile": {
            "type": "n",
            "pronunciation": "/maɪl/",
            "meaning": "dặm"
        },
        "military": {
            "type": "adj",
            "pronunciation": "/ˈmɪl.ɪ.ˌter.i/",
            "meaning": "quân đội"
        },
        "milk": {
            "type": "n, v",
            "pronunciation": "/mɪlk/",
            "meaning": "sữa, vắt sữa"
        },
        "million": {
            "type": "num",
            "pronunciation": "/ˈmɪl.jən/",
            "meaning": "triệu, triệu"
        },
        "mind": {
            "type": "n, v",
            "pronunciation": "/maɪnd/",
            "meaning": "tâm trí, tâm hồn; chú ý, quan tâm"
        },
        "mine": {
            "type": "pron, n, v",
            "pronunciation": "/maɪn/",
            "meaning": "của tôi, của tôi; mỏ, mỏ; khai mỏ"
        },
        "minister": {
            "type": "n",
            "pronunciation": "/ˈmɪn.ə.stɚ/",
            "meaning": "bộ trưởng"
        },
        "minor": {
            "type": "adj, n",
            "pronunciation": "/ˈmaɪ.nɚ/",
            "meaning": "không quan trọng, không quan trọng; vị thành niên"
        },
        "minority": {
            "type": "n",
            "pronunciation": "/məˈnɔːr.ə.t̬i/",
            "meaning": "thiểu số, thiểu số"
        },
        "minute": {
            "type": "n",
            "pronunciation": "/ˈmɪn.ɪt/",
            "meaning": "phút"
        },
        "mirror": {
            "type": "n, v",
            "pronunciation": "/ˈmɪr.ɚ/",
            "meaning": "gương, gương; phản chiếu, phản chiếu"
        },
        "miss": {
            "type": "v, n",
            "pronunciation": "/mɪs/",
            "meaning": "lỡ, thiếu; cô, cô"
        },
        "mission": {
            "type": "n",
            "pronunciation": "/ˈmɪʃ.ən/",
            "meaning": "nhiệm vụ"
        },
        "mistake": {
            "type": "n, v",
            "pronunciation": "/mɪˈsteɪk/",
            "meaning": "sai lầm, lỗi lầm; nhầm lẫn, lỗi lầm"
        },
        "mix": {
            "type": "v, n",
            "pronunciation": "/mɪks/",
            "meaning": "kết hợp, pha trộn; sự kết hợp, sự pha trộn"
        },
        "mixture": {
            "type": "n",
            "pronunciation": "/ˈmɪks.tʃɚ/",
            "meaning": "hỗn hợp"
        },
        "mobile": {
            "type": "adj, n",
            "pronunciation": "/ˈmoʊ.bəl/",
            "meaning": "di động, di động; xe lửa"
        },
        "mode": {
            "type": "n",
            "pronunciation": "/moʊd/",
            "meaning": "chế độ, chế độ"
        },
        "model": {
            "type": "n, v",
            "pronunciation": "/ˈmɑː.dəl/",
            "meaning": "mô hình, mẫu; mô hình, mô hình"
        },
        "moderate": {
            "type": "adj, v",
            "pronunciation": "/ˈmɑː.dər.ɪt/",
            "meaning": "vừa phải, vừa phải; điều chỉnh, làm dịu"
        },
        "modern": {
            "type": "adj",
            "pronunciation": "/ˈmɑː.dɚn/",
            "meaning": "hiện đại, hiện đại"
        },
        "mom": {
            "type": "n",
            "pronunciation": "/mɑːm/",
            "meaning": "mẹ"
        },
        "moment": {
            "type": "n",
            "pronunciation": "/ˈmoʊ.mənt/",
            "meaning": "lúc, lúc"
        },
        "money": {
            "type": "n",
            "pronunciation": "/ˈmʌn.i/",
            "meaning": "tiền"
        },
        "monitor": {
            "type": "n, v",
            "pronunciation": "/ˈmɑː.nə.t̬ɚ/",
            "meaning": "màn hình, màn hình; theo dõi, giám sát"
        },
        "month": {
            "type": "n",
            "pronunciation": "/mʌnθ/",
            "meaning": "tháng"
        },
        "mood": {
            "type": "n",
            "pronunciation": "/muːd/",
            "meaning": "tâm trạng"
        },
        "moon": {
            "type": "n",
            "pronunciation": "/muːn/",
            "meaning": "mặt trăng"
        },
        "moral": {
            "type": "adj, n",
            "pronunciation": "/ˈmɔːr.əl/",
            "meaning": "đạo đức, đạo đức; bài học, kinh nghiệm"
        },
        "more": {
            "type": "determiner, pron, adv",
            "pronunciation": "/mɔːr/",
            "meaning": "hơn nữa, hơn; hơn nữa, hơn; nhiều hơn"
        },
        "morning": {
            "type": "n",
            "pronunciation": "/ˈmɔːr.nɪŋ/",
            "meaning": "buổi sáng"
        },
        "most": {
            "type": "det, pron, adv",
            "pronunciation": "/moʊst/",
            "meaning": "hầu hết, phần lớn; hầu hết, phần lớn; hầu hết, phần lớn"
        },
        "mostly": {
            "type": "adv",
            "pronunciation": "/ˈmoʊst.li/",
            "meaning": "hầu hết"
        },
        "mother": {
            "type": "n",
            "pronunciation": "/ˈmʌð.ɚ/",
            "meaning": "mẹ"
        },
        "motion": {
            "type": "n",
            "pronunciation": "/ˈmoʊ.ʃən/",
            "meaning": "chuyển động"
        },
        "motor": {
            "type": "n, adj",
            "pronunciation": "/ˈmoʊ.t̬ɚ/",
            "meaning": "động cơ, động cơ; động cơ, động cơ"
        },
        "mountain": {
            "type": "n",
            "pronunciation": "/ˈmaʊn.t̬ən/",
            "meaning": "núi"
        },
        "mouse": {
            "type": "n",
            "pronunciation": "/maʊs/",
            "meaning": "con chuột"
        },
        "mouth": {
            "type": "n",
            "pronunciation": "/maʊθ/",
            "meaning": "miệng"
        },
        "move": {
            "type": "v, n",
            "pronunciation": "/muːv/",
            "meaning": "di chuyển, di chuyển; sự di chuyển, sự di chuyển"
        },
        "movement": {
            "type": "n",
            "pronunciation": "/ˈmuːv.mənt/",
            "meaning": "sự di chuyển, sự di chuyển"
        },
        "movie": {
            "type": "n",
            "pronunciation": "/ˈmuːv.i/",
            "meaning": "phim"
        },
        "Mr": {
            "type": "n",
            "pronunciation": "/ˈmɪs.tɚ/",
            "meaning": "ông"
        },
        "Mrs": {
            "type": "n",
            "pronunciation": "/ˈmɪs.ɪz/",
            "meaning": "bà"
        },
        "Ms": {
            "type": "n",
            "pronunciation": "/ˈmɪz/",
            "meaning": "đồng nữ"
        },
        "much": {
            "type": "determiner, pron, adv",
            "pronunciation": "/mʌtʃ/",
            "meaning": "nhiều"
        },
        "mud": {
            "type": "n",
            "pronunciation": "/mʌd/",
            "meaning": "bùn"
        },
        "murder": {
            "type": "n, v",
            "pronunciation": "/ˈmɝː.dɚ/",
            "meaning": "giết người, giết người"
        },
        "muscle": {
            "type": "n",
            "pronunciation": "/ˈmʌs.əl/",
            "meaning": "cơ bắp"
        },
        "museum": {
            "type": "n",
            "pronunciation": "/mjuˈziːəm/",
            "meaning": "bảo tàng"
        },
        "music": {
            "type": "n",
            "pronunciation": "/ˈmjuː.zɪk/",
            "meaning": "âm nhạc"
        },
        "musical": {
            "type": "adj",
            "pronunciation": "/ˈmjuː.zɪ.kəl/",
            "meaning": "âm nhạc"
        },
        "must": {
            "type": "modal v",
            "pronunciation": "/məst, mʌst/",
            "meaning": "phải, phải"
        },
        "my": {
            "type": "det",
            "pronunciation": "/maɪ/",
            "meaning": "của tôi, của tôi"
        },
        "myself": {
            "type": "pron",
            "pronunciation": "/maɪˈself/",
            "meaning": "tự tôi, chính tôi"
        },
        "name": {
            "type": "noun",
            "pronunciation": "/neɪm/",
            "meaning": "tên"
        },
        "narrow": {
            "type": "adjective, verb",
            "pronunciation": "/ˈnæroʊ/",
            "meaning": "hẹp, thu hẹp"
        },
        "nation": {
            "type": "noun",
            "pronunciation": "/ˈneɪ.ʃən/",
            "meaning": "quốc gia"
        },
        "national": {
            "type": "adjective",
            "pronunciation": "/ˈnæʃ.ən.əl/",
            "meaning": "quốc gia"
        },
        "native": {
            "type": "adjective, noun",
            "pronunciation": "/ˈneɪ.tɪv/",
            "meaning": "bản địa, bản xứ; người bản địa"
        },
        "natural": {
            "type": "adjective",
            "pronunciation": "/ˈnætʃ.ər.əl/",
            "meaning": "tự nhiên"
        },
        "nature": {
            "type": "noun",
            "pronunciation": "/ˈneɪ.tʃɚ/",
            "meaning": "tự nhiên"
        },
        "near": {
            "type": "adjective, adverb, preposition",
            "pronunciation": "/nɪr/",
            "meaning": "gần"
        },
        "nearby": {
            "type": "adjective, adverb",
            "pronunciation": "/ˌnɪrˈbaɪ/",
            "meaning": "gần, xung quanh"
        },
        "nearly": {
            "type": "adverb",
            "pronunciation": "/ˈnɪr.li/",
            "meaning": "gần như"
        },
        "neat": {
            "type": "adjective",
            "pronunciation": "/niːt/",
            "meaning": "gọn gàng, ngăn nắp"
        },
        "necessarily": {
            "type": "adverb",
            "pronunciation": "/ˌnes.əˈser.əl.i/",
            "meaning": "tất yếu, nhất thiết"
        },
        "necessary": {
            "type": "adjective",
            "pronunciation": "/ˈnes.əˌser.i/",
            "meaning": "cần thiết"
        },
        "neck": {
            "type": "noun",
            "pronunciation": "/nek/",
            "meaning": "cổ"
        },
        "need": {
            "type": "verb, noun",
            "pronunciation": "/niːd/",
            "meaning": "cần, nhu cầu"
        },
        "negative": {
            "type": "adjective, noun",
            "pronunciation": "/ˈneɡ.ə.tɪv/",
            "meaning": "phủ định; số âm, âm"
        },
        "negotiate": {
            "type": "verb",
            "pronunciation": "/nɪˈɡoʊ.ʃi.eɪt/",
            "meaning": "đàm phán"
        },
        "neighbor": {
            "type": "noun",
            "pronunciation": "/ˈneɪ.bɚ/",
            "meaning": "hàng xóm"
        },
        "neither": {
            "type": "determiner, pronoun, conjunction",
            "pronunciation": "/ˈniː.ðɚ/",
            "meaning": "không ai, không cái nào; không phải cái này, không phải cái kia; cả hai đều không"
        },
        "nerve": {
            "type": "noun",
            "pronunciation": "/nɜːrv/",
            "meaning": "dây thần kinh"
        },
        "nervous": {
            "type": "adjective",
            "pronunciation": "/ˈnɜːr.vəs/",
            "meaning": "bồn chồn, lo lắng"
        },
        "nest": {
            "type": "noun, verb",
            "pronunciation": "/nest/",
            "meaning": "tổ (chim); làm tổ"
        },
        "net": {
            "type": "noun, verb, adjective",
            "pronunciation": "/net/",
            "meaning": "lưới; lưới, rổ; rõ, sạch sẽ"
        },
        "network": {
            "type": "noun, verb",
            "pronunciation": "/ˈnet.wɝːk/",
            "meaning": "mạng lưới; kết nối"
        },
        "never": {
            "type": "adverb",
            "pronunciation": "/ˈnev.ɚ/",
            "meaning": "không bao giờ"
        },
        "nevertheless": {
            "type": "adverb",
            "pronunciation": "/ˌnev.ɚ.ðəˈles/",
            "meaning": "tuy nhiên, mặc dù thế"
        },
        "new": {
            "type": "adjective",
            "pronunciation": "/njuː/",
            "meaning": "mới"
        },
        "news": {
            "type": "noun",
            "pronunciation": "/nuz/",
            "meaning": "tin tức"
        },
        "newspaper": {
            "type": "noun",
            "pronunciation": "/ˈnuːz.peɪ.pɚ/",
            "meaning": "báo"
        },
        "next": {
            "type": "adjective, adverb, preposition",
            "pronunciation": "/nekst/",
            "meaning": "tiếp theo, sau đó"
        },
        "nice": {
            "type": "adjective",
            "pronunciation": "/naɪs/",
            "meaning": "đẹp, tốt"
        },
        "night": {
            "type": "noun",
            "pronunciation": "/naɪt/",
            "meaning": "đêm"
        },
        "nine": {
            "type": "number",
            "pronunciation": "/naɪn/",
            "meaning": "số 9"
        },
        "no": {
            "type": "determiner, adverb, exclamation",
            "pronunciation": "/noʊ/",
            "meaning": "không, không có; không; không được, thôi"
        },
        "noble": {
            "type": "adjective, noun",
            "pronunciation": "/ˈnoʊ.bəl/",
            "meaning": "quý tộc; người quý tộc"
        },
        "nobody": {
            "type": "pronoun",
            "pronunciation": "/ˈnoʊ.bɑː.di/",
            "meaning": "không ai"
        },
        "nod": {
            "type": "verb, noun",
            "pronunciation": "/nɑːd/",
            "meaning": "gật đầu; sự gật đầu"
        },
        "noise": {
            "type": "noun",
            "pronunciation": "/nɔɪz/",
            "meaning": "tiếng ồn, tiếng động"
        },
        "none": {
            "type": "pronoun",
            "pronunciation": "/nʌn/",
            "meaning": "không ai, không cái nào"
        },
        "nonsense": {
            "type": "noun",
            "pronunciation": "/ˈnɑːn.sens/",
            "meaning": "điều vô lí, người vô tính"
        },
        "nor": {
            "type": "conjunction",
            "pronunciation": "/nɔːr/",
            "meaning": "cũng không, cũng không phải"
        },
        "normal": {
            "type": "adjective",
            "pronunciation": "/ˈnɔːr.məl/",
            "meaning": "bình thường, thường"
        },
        "north": {
            "type": "noun, adverb, adjective",
            "pronunciation": "/nɔːrθ/",
            "meaning": "phía bắc"
        },
        "northern": {
            "type": "adjective",
            "pronunciation": "/ˈnɔːr.ðərn/",
            "meaning": "bắc"
        },
        "nose": {
            "type": "noun",
            "pronunciation": "/noʊz/",
            "meaning": "mũi"
        },
        "not": {
            "type": "adverb",
            "pronunciation": "/nɑːt/",
            "meaning": "không"
        },
        "note": {
            "type": "noun, verb",
            "pronunciation": "/noʊt/",
            "meaning": "ghi chú; ghi chú, lưu ý"
        },
        "nothing": {
            "type": "pronoun",
            "pronunciation": "/ˈnʌθ.ɪŋ/",
            "meaning": "không cái gì, không"
        },
        "notice": {
            "type": "noun, verb",
            "pronunciation": "/ˈnoʊ.t̬ɪs/",
            "meaning": "sự chú ý, thông báo; chú ý, để ý"
        },
        "novel": {
            "type": "noun, adjective",
            "pronunciation": "/ˈnɑː.vəl/",
            "meaning": "tiểu thuyết; mới, mới lạ"
        },
        "now": {
            "type": "adverb",
            "pronunciation": "/naʊ/",
            "meaning": "bây giờ, hiện nay"
        },
        "nowhere": {
            "type": "adverb",
            "pronunciation": "/ˈnoʊ.wer/",
            "meaning": "không nơi nào"
        },
        "nuclear": {
            "type": "adjective",
            "pronunciation": "/ˈnuː.kli.ɚ/",
            "meaning": "hạt nhân"
        },
        "number": {
            "type": "noun, verb",
            "pronunciation": "/ˈnʌm.bɚ/",
            "meaning": "số, con số; đánh số, gắn số"
        },
        "nurse": {
            "type": "noun, verb",
            "pronunciation": "/nɝːs/",
            "meaning": "y tá; chăm sóc, nuôi dưỡng"
        },
        "nut": {
            "type": "noun",
            "pronunciation": "/nʌt/",
            "meaning": "hạt, hạt dẻ"
        },
        "sad": {
            "type": "adj",
            "pronunciation": "/sæd/",
            "meaning": "buồn, chán nản"
        },
        "safe": {
            "type": "adj",
            "pronunciation": "/seɪf/",
            "meaning": "an toàn"
        },
        "sale": {
            "type": "n",
            "pronunciation": "/seɪl/",
            "meaning": "sự bán, hàng giảm giá"
        },
        "salt": {
            "type": "n",
            "pronunciation": "/sɔːlt/",
            "meaning": "muối"
        },
        "same": {
            "type": "adj",
            "pronunciation": "/seɪm/",
            "meaning": "giống nhau, tương tự"
        },
        "sand": {
            "type": "n",
            "pronunciation": "/sænd/",
            "meaning": "cát"
        },
        "satisfy": {
            "type": "v",
            "pronunciation": "/ˈsæt.ɪs.faɪ/",
            "meaning": "làm hài lòng, thỏa mãn"
        },
        "save": {
            "type": "v",
            "pronunciation": "/seɪv/",
            "meaning": "tiết kiệm, cứu, giữ lại"
        },
        "say": {
            "type": "v",
            "pronunciation": "/seɪ/",
            "meaning": "nói, phát biểu"
        },
        "school": {
            "type": "n",
            "pronunciation": "/skuːl/",
            "meaning": "trường học"
        },
        "science": {
            "type": "n",
            "pronunciation": "/ˈsaɪ.əns/",
            "meaning": "khoa học"
        },
        "scissors": {
            "type": "n",
            "pronunciation": "/ˈsɪz.ɚz/",
            "meaning": "cây kéo"
        },
        "sea": {
            "type": "n",
            "pronunciation": "/siː/",
            "meaning": "biển"
        },
        "search": {
            "type": "v",
            "pronunciation": "/sɜːrtʃ/",
            "meaning": "tìm kiếm"
        },
        "season": {
            "type": "n",
            "pronunciation": "/ˈsiː.zən/",
            "meaning": "mùa, mùa vụ"
        },
        "seat": {
            "type": "n",
            "pronunciation": "/siːt/",
            "meaning": "ghế"
        },
        "second": {
            "type": "adj",
            "pronunciation": "/ˈsek.ənd/",
            "meaning": "thứ hai, thứ nhì"
        },
        "secret": {
            "type": "adj",
            "pronunciation": "/ˈsiː.krət/",
            "meaning": "bí mật, kín đáo"
        },
        "see": {
            "type": "v",
            "pronunciation": "/siː/",
            "meaning": "nhìn thấy"
        },
        "seem": {
            "type": "v",
            "pronunciation": "/siːm/",
            "meaning": "hình như, dường như"
        },
        "select": {
            "type": "v",
            "pronunciation": "/sɪˈlekt/",
            "meaning": "lựa chọn"
        },
        "sell": {
            "type": "v",
            "pronunciation": "/sel/",
            "meaning": "bán"
        },
        "send": {
            "type": "v",
            "pronunciation": "/send/",
            "meaning": "gửi, chuyển đi"
        },
        "sense": {
            "type": "n",
            "pronunciation": "/sens/",
            "meaning": "giác quan, ý thức"
        },
        "sentence": {
            "type": "n",
            "pronunciation": "/ˈsen.təns/",
            "meaning": "câu (văn)"
        },
        "separate": {
            "type": "adj",
            "pronunciation": "/ˈsep.ər.ət/",
            "meaning": "riêng biệt, tách rời"
        },
        "serious": {
            "type": "adj",
            "pronunciation": "/ˈsɪr.i.əs/",
            "meaning": "nghiêm túc, đứng đắn"
        },
        "serve": {
            "type": "v",
            "pronunciation": "/sɝːv/",
            "meaning": "phục vụ"
        },
        "service": {
            "type": "n",
            "pronunciation": "/ˈsɝː.vɪs/",
            "meaning": "dịch vụ, sự phục vụ"
        },
        "set": {
            "type": "v",
            "pronunciation": "/set/",
            "meaning": "đặt, định, cài đặt"
        },
        "seven": {
            "type": "n",
            "pronunciation": "/ˈsev.ən/",
            "meaning": "số 7"
        },
        "several": {
            "type": "det",
            "pronunciation": "/ˈsev.rəl/",
            "meaning": "một vài, một số"
        },
        "sex": {
            "type": "n",
            "pronunciation": "/seks/",
            "meaning": "giới tính, tình dục"
        },
        "shade": {
            "type": "n",
            "pronunciation": "/ʃeɪd/",
            "meaning": "bóng râm, cái che nắng"
        },
        "shake": {
            "type": "v",
            "pronunciation": "/ʃeɪk/",
            "meaning": "run, lắc"
        },
        "shape": {
            "type": "n",
            "pronunciation": "/ʃeɪp/",
            "meaning": "hình dáng, hình"
        },
        "share": {
            "type": "v",
            "pronunciation": "/ʃer/",
            "meaning": "chia sẻ"
        },
        "sharp": {
            "type": "adj",
            "pronunciation": "/ʃɑːrp/",
            "meaning": "sắc, sắc nét"
        },
        "she": {
            "type": "pron",
            "pronunciation": "/ʃiː/",
            "meaning": "cô ấy, bà ấy"
        },
        "sheep": {
            "type": "n",
            "pronunciation": "/ʃiːp/",
            "meaning": "con cừu"
        },
        "sheet": {
            "type": "n",
            "pronunciation": "/ʃiːt/",
            "meaning": "tấm, mảnh, tờ"
        },
        "shelf": {
            "type": "n",
            "pronunciation": "/ʃelf/",
            "meaning": "kệ sách"
        },
        "shine": {
            "type": "v",
            "pronunciation": "/ʃaɪn/",
            "meaning": "chiếu sáng, tỏa sáng"
        },
        "ship": {
            "type": "n",
            "pronunciation": "/ʃɪp/",
            "meaning": "tàu thủy"
        },
        "shirt": {
            "type": "n",
            "pronunciation": "/ʃɝːt/",
            "meaning": "áo sơ mi"
        },
        "shock": {
            "type": "n",
            "pronunciation": "/ʃɑːk/",
            "meaning": "sự sốc, cú sốc"
        },
        "shoe": {
            "type": "n",
            "pronunciation": "/ʃuː/",
            "meaning": "giày dép"
        },
        "shoot": {
            "type": "v",
            "pronunciation": "/ʃuːt/",
            "meaning": "bắn, xạ, chụp ảnh"
        },
        "shop": {
            "type": "n",
            "pronunciation": "/ʃɑːp/",
            "meaning": "cửa hàng"
        },
        "short": {
            "type": "adj",
            "pronunciation": "/ʃɔːrt/",
            "meaning": "ngắn, thấp"
        },
        "should": {
            "type": "modal verb",
            "pronunciation": "/ʃʊd/",
            "meaning": "nên, phải"
        },
        "shout": {
            "type": "v",
            "pronunciation": "/ʃaʊt/",
            "meaning": "hét lên, la hét"
        },
        "show": {
            "type": "v",
            "pronunciation": "/ʃoʊ/",
            "meaning": "trình diễn, cho xem"
        },
        "shut": {
            "type": "v",
            "pronunciation": "/ʃʌt/",
            "meaning": "đóng lại, đóng kín"
        },
        "sick": {
            "type": "adj",
            "pronunciation": "/sɪk/",
            "meaning": "ốm, không khỏe"
        },
        "side": {
            "type": "n",
            "pronunciation": "/saɪd/",
            "meaning": "phía, bên"
        },
        "sign": {
            "type": "n",
            "pronunciation": "/saɪn/",
            "meaning": "dấu hiệu, biểu hiện"
        },
        "signal": {
            "type": "n",
            "pronunciation": "/ˈsɪɡ.nəl/",
            "meaning": "tín hiệu, dấu hiệu"
        },
        "silence": {
            "type": "n",
            "pronunciation": "/ˈsaɪ.ləns/",
            "meaning": "im lặng"
        },
        "silly": {
            "type": "adj",
            "pronunciation": "/ˈsɪl.i/",
            "meaning": "ngu ngốc, ngớ ngẩn"
        },
        "silver": {
            "type": "n",
            "pronunciation": "/ˈsɪl.vɚ/",
            "meaning": "bạc"
        },
        "similar": {
            "type": "adj",
            "pronunciation": "/ˈsɪm.ə.lɚ/",
            "meaning": "tương tự, giống nhau"
        },
        "simple": {
            "type": "adj",
            "pronunciation": "/ˈsɪm.pəl/",
            "meaning": "đơn giản, dễ dàng"
        },
        "since": {
            "type": "prep",
            "pronunciation": "/sɪns/",
            "meaning": "kể từ, từ khi"
        },
        "sing": {
            "type": "v",
            "pronunciation": "/sɪŋ/",
            "meaning": "hát"
        },
        "single": {
            "type": "adj",
            "pronunciation": "/ˈsɪŋ.ɡəl/",
            "meaning": "đơn, độc thân"
        },
        "sink": {
            "type": "v",
            "pronunciation": "/sɪŋk/",
            "meaning": "chìm, lún"
        },
        "sister": {
            "type": "n",
            "pronunciation": "/ˈsɪs.tɚ/",
            "meaning": "chị, em gái"
        },
        "sit": {
            "type": "v",
            "pronunciation": "/sɪt/",
            "meaning": "ngồi"
        },
        "site": {
            "type": "n",
            "pronunciation": "/saɪt/",
            "meaning": "địa điểm, vị trí"
        },
        "situation": {
            "type": "n",
            "pronunciation": "/ˌsɪtʃ.uˈeɪ.ʃən/",
            "meaning": "tình hình, tình trạng"
        },
        "six": {
            "type": "n",
            "pronunciation": "/sɪks/",
            "meaning": "số 6"
        },
        "size": {
            "type": "n",
            "pronunciation": "/saɪz/",
            "meaning": "kích cỡ, cỡ"
        },
        "skill": {
            "type": "n",
            "pronunciation": "/skɪl/",
            "meaning": "kỹ năng, kỹ thuật"
        },
        "skin": {
            "type": "n",
            "pronunciation": "/skɪn/",
            "meaning": "da, vỏ, vỏ trái cây"
        },
        "skirt": {
            "type": "n",
            "pronunciation": "/skɝːt/",
            "meaning": "váy, chân váy"
        },
        "sky": {
            "type": "n",
            "pronunciation": "/skaɪ/",
            "meaning": "bầu trời"
        },
        "sleep": {
            "type": "v",
            "pronunciation": "/sliːp/",
            "meaning": "ngủ"
        },
        "slice": {
            "type": "n",
            "pronunciation": "/slaɪs/",
            "meaning": "lát, miếng"
        },
        "slide": {
            "type": "v",
            "pronunciation": "/slaɪd/",
            "meaning": "trượt, trượt"
        },
        "slow": {
            "type": "adj",
            "pronunciation": "/sloʊ/",
            "meaning": "chậm"
        },
        "small": {
            "type": "adj",
            "pronunciation": "/smɑːl/",
            "meaning": "nhỏ, bé"
        },
        "smart": {
            "type": "adj",
            "pronunciation": "/smɑːrt/",
            "meaning": "lảng mạn, thông minh"
        },
        "smell": {
            "type": "v",
            "pronunciation": "/smel/",
            "meaning": "ngửi, có mùi"
        },
        "smile": {
            "type": "v",
            "pronunciation": "/smaɪl/",
            "meaning": "mỉm cười"
        },
        "smoke": {
            "type": "v",
            "pronunciation": "/smoʊk/",
            "meaning": "hút thuốc, khói"
        },
        "smooth": {
            "type": "adj",
            "pronunciation": "/smuːð/",
            "meaning": "mịn, trơn"
        },
        "snake": {
            "type": "n",
            "pronunciation": "/sneɪk/",
            "meaning": "con rắn"
        },
        "snow": {
            "type": "n",
            "pronunciation": "/snoʊ/",
            "meaning": "tuyết"
        },
        "so": {
            "type": "adv",
            "pronunciation": "/soʊ/",
            "meaning": "vậy, như vậy"
        },
        "soap": {
            "type": "n",
            "pronunciation": "/soʊp/",
            "meaning": "xà phòng"
        },
        "social": {
            "type": "adj",
            "pronunciation": "/ˈsoʊ.ʃəl/",
            "meaning": "xã hội, của xã hội"
        },
        "society": {
            "type": "n",
            "pronunciation": "/səˈsaɪ.ə.t̬i/",
            "meaning": "xã hội, tổ chức xã hội"
        },
        "sock": {
            "type": "n",
            "pronunciation": "/sɑːk/",
            "meaning": "tất"
        },
        "soft": {
            "type": "adj",
            "pronunciation": "/sɑːft/",
            "meaning": "mềm, dễ dàng"
        },
        "software": {
            "type": "n",
            "pronunciation": "/ˈsɑːft.wer/",
            "meaning": "phần mềm"
        },
        "soil": {
            "type": "n",
            "pronunciation": "/sɔɪl/",
            "meaning": "đất, đất trồng"
        },
        "soldier": {
            "type": "n",
            "pronunciation": "/ˈsoʊl.dʒɚ/",
            "meaning": "binh sĩ, quân nhân"
        },
        "solution": {
            "type": "n",
            "pronunciation": "/səˈluː.ʃən/",
            "meaning": "giải pháp"
        },
        "solve": {
            "type": "v",
            "pronunciation": "/sɑːlv/",
            "meaning": "giải quyết, tháo gỡ"
        },
        "some": {
            "type": "pron",
            "pronunciation": "/sʌm/",
            "meaning": "một số, một ít"
        },
        "somebody": {
            "type": "pron",
            "pronunciation": "/ˈsʌm.bɑː.di/",
            "meaning": "ai đó"
        },
        "someone": {
            "type": "pron",
            "pronunciation": "/ˈsʌm.wʌn/",
            "meaning": "ai đó"
        },
        "something": {
            "type": "pron",
            "pronunciation": "/ˈsʌm.θɪŋ/",
            "meaning": "cái gì đó"
        },
        "sometimes": {
            "type": "adv",
            "pronunciation": "/ˈsʌm.taɪmz/",
            "meaning": "thỉnh thoảng"
        },
        "son": {
            "type": "n",
            "pronunciation": "/sʌn/",
            "meaning": "con trai"
        },
        "song": {
            "type": "n",
            "pronunciation": "/sɔːŋ/",
            "meaning": "bài hát, khúc hát"
        },
        "soon": {
            "type": "adv",
            "pronunciation": "/suːn/",
            "meaning": "sớm, sắp"
        },
        "sorry": {
            "type": "adj",
            "pronunciation": "/ˈsɑːr.i/",
            "meaning": "xin lỗi"
        },
        "sort": {
            "type": "n",
            "pronunciation": "/sɔːrt/",
            "meaning": "loại, kiểu, dạng"
        },
        "sound": {
            "type": "n",
            "pronunciation": "/saʊnd/",
            "meaning": "âm thanh"
        },
        "soup": {
            "type": "n",
            "pronunciation": "/suːp/",
            "meaning": "súp, canh"
        },
        "source": {
            "type": "n",
            "pronunciation": "/sɔːrs/",
            "meaning": "nguồn, gốc, căn nguyên"
        },
        "south": {
            "type": "n",
            "pronunciation": "/saʊθ/",
            "meaning": "phía Nam"
        },
        "space": {
            "type": "n",
            "pronunciation": "/speɪs/",
            "meaning": "không gian, khoảng trống"
        },
        "spare": {
            "type": "adj",
            "pronunciation": "/sper/",
            "meaning": "dư thừa, không sử dụng"
        },
        "speak": {
            "type": "v",
            "pronunciation": "/spiːk/",
            "meaning": "nói, nói chuyện"
        },
        "special": {
            "type": "adj",
            "pronunciation": "/ˈspeʃ.əl/",
            "meaning": "đặc biệt, riêng biệt"
        },
        "specific": {
            "type": "adj",
            "pronunciation": "/spəˈsɪf.ɪk/",
            "meaning": "cụ thể, đặc trưng"
        },
        "speech": {
            "type": "n",
            "pronunciation": "/spiːtʃ/",
            "meaning": "bài phát biểu, bài diễn thuyết"
        },
        "speed": {
            "type": "n",
            "pronunciation": "/spiːd/",
            "meaning": "tốc độ, vận tốc"
        },
        "spell": {
            "type": "v",
            "pronunciation": "/spel/",
            "meaning": "đánh vần"
        },
        "spend": {
            "type": "v",
            "pronunciation": "/spend/",
            "meaning": "dành, tiêu"
        },
        "spill": {
            "type": "v",
            "pronunciation": "/spɪl/",
            "meaning": "làm đổ, làm tràn"
        },
        "spirit": {
            "type": "n",
            "pronunciation": "/ˈspɪr.ɪt/",
            "meaning": "tinh thần, linh hồn"
        },
        "spite": {
            "type": "n",
            "pronunciation": "/spaɪt/",
            "meaning": "sự ác ý, sự hiếu chiến"
        },
        "split": {
            "type": "v",
            "pronunciation": "/splɪt/",
            "meaning": "chia, tách, phân chia"
        },
        "spoil": {
            "type": "v",
            "pronunciation": "/spɔɪl/",
            "meaning": "làm hỏng, làm hỏng"
        },
        "spoon": {
            "type": "n",
            "pronunciation": "/spuːn/",
            "meaning": "cái thìa"
        },
        "sport": {
            "type": "n",
            "pronunciation": "/spɔːrt/",
            "meaning": "thể thao"
        },
        "spot": {
            "type": "n",
            "pronunciation": "/spɑːt/",
            "meaning": "điểm, chỗ"
        },
        "spread": {
            "type": "v",
            "pronunciation": "/spred/",
            "meaning": "lan truyền, phổ biến"
        },
        "spring": {
            "type": "n",
            "pronunciation": "/sprɪŋ/",
            "meaning": "mùa xuân, bộ phận nhảy"
        },
        "square": {
            "type": "adj",
            "pronunciation": "/skweər/",
            "meaning": "vuông, hình vuông"
        },
        "squeeze": {
            "type": "v",
            "pronunciation": "/skwiːz/",
            "meaning": "bóp, ép"
        },
        "stable": {
            "type": "adj",
            "pronunciation": "/ˈsteɪ.bl̩/",
            "meaning": "ổn định, ổn định"
        },
        "staff": {
            "type": "n",
            "pronunciation": "/stæf/",
            "meaning": "nhân viên, đội ngũ"
        },
        "stage": {
            "type": "n",
            "pronunciation": "/steɪdʒ/",
            "meaning": "sân khấu, giai đoạn"
        },
        "stairs": {
            "type": "n",
            "pronunciation": "/sterz/",
            "meaning": "cầu thang"
        },
        "stand": {
            "type": "v",
            "pronunciation": "/stænd/",
            "meaning": "đứng"
        },
        "standard": {
            "type": "n",
            "pronunciation": "/ˈstæn.dɚd/",
            "meaning": "tiêu chuẩn, chuẩn mực"
        },
        "star": {
            "type": "n",
            "pronunciation": "/stɑːr/",
            "meaning": "ngôi sao"
        },
        "start": {
            "type": "v",
            "pronunciation": "/stɑːrt/",
            "meaning": "bắt đầu"
        },
        "state": {
            "type": "n",
            "pronunciation": "/steɪt/",
            "meaning": "tiểu bang, trạng thái"
        },
        "station": {
            "type": "n",
            "pronunciation": "/ˈsteɪ.ʃən/",
            "meaning": "trạm, ga"
        },
        "stay": {
            "type": "v",
            "pronunciation": "/steɪ/",
            "meaning": "ở lại, lưu lại"
        },
        "steal": {
            "type": "v",
            "pronunciation": "/stiːl/",
            "meaning": "ăn cắp, lấy trộm"
        },
        "steam": {
            "type": "n",
            "pronunciation": "/stiːm/",
            "meaning": "hơi nước, hơi nước"
        },
        "steel": {
            "type": "n",
            "pronunciation": "/stiːl/",
            "meaning": "thép, sắt thép"
        },
        "step": {
            "type": "n",
            "pronunciation": "/step/",
            "meaning": "bước, bước đi"
        },
        "stick": {
            "type": "n",
            "pronunciation": "/stɪk/",
            "meaning": "cây, cái gậy"
        },
        "still": {
            "type": "adv",
            "pronunciation": "/stɪl/",
            "meaning": "vẫn, vẫn còn"
        },
        "stomach": {
            "type": "n",
            "pronunciation": "/ˈstʌm.ək/",
            "meaning": "dạ dày"
        },
        "stone": {
            "type": "n",
            "pronunciation": "/stoʊn/",
            "meaning": "hòn đá"
        },
        "stop": {
            "type": "v",
            "pronunciation": "/stɑːp/",
            "meaning": "dừng, ngừng lại"
        },
        "store": {
            "type": "n",
            "pronunciation": "/stɔːr/",
            "meaning": "cửa hàng, kho"
        },
        "storm": {
            "type": "n",
            "pronunciation": "/stɔːrm/",
            "meaning": "bão"
        },
        "story": {
            "type": "n",
            "pronunciation": "/ˈstɔːr.i/",
            "meaning": "câu chuyện"
        },
        "straight": {
            "type": "adj",
            "pronunciation": "/streɪt/",
            "meaning": "thẳng, thẳng thừng"
        },
        "strange": {
            "type": "adj",
            "pronunciation": "/streɪndʒ/",
            "meaning": "lạ, kỳ quặc"
        },
        "street": {
            "type": "n",
            "pronunciation": "/striːt/",
            "meaning": "đường phố"
        },
        "stretch": {
            "type": "v",
            "pronunciation": "/stretʃ/",
            "meaning": "duỗi ra, kéo dài"
        },
        "strike": {
            "type": "v",
            "pronunciation": "/straɪk/",
            "meaning": "đánh, tấn công, đình công"
        },
        "strong": {
            "type": "adj",
            "pronunciation": "/strɔːŋ/",
            "meaning": "mạnh, cứng cáp"
        },
        "structure": {
            "type": "n",
            "pronunciation": "/ˈstrʌk.tʃɚ/",
            "meaning": "cấu trúc"
        },
        "struggle": {
            "type": "v",
            "pronunciation": "/ˈstrʌɡ.əl/",
            "meaning": "đấu tranh, gặp khó khăn"
        },
        "student": {
            "type": "n",
            "pronunciation": "/ˈstuː.dənt/",
            "meaning": "học sinh, sinh viên"
        },
        "studio": {
            "type": "n",
            "pronunciation": "/ˈstuː.di.oʊ/",
            "meaning": "phòng thu, xưởng làm phim"
        },
        "study": {
            "type": "v",
            "pronunciation": "/ˈstʌd.i/",
            "meaning": "học, nghiên cứu"
        },
        "stuff": {
            "type": "n",
            "pronunciation": "/stʌf/",
            "meaning": "vật liệu, vật dụng"
        },
        "stupid": {
            "type": "adj",
            "pronunciation": "/ˈstuː.pɪd/",
            "meaning": "ngu ngốc, ngốc nghếch"
        },
        "style": {
            "type": "n",
            "pronunciation": "/staɪl/",
            "meaning": "phong cách, kiểu cách"
        },
        "subject": {
            "type": "n",
            "pronunciation": "/ˈsʌb.dʒɪkt/",
            "meaning": "môn học, chủ đề"
        },
        "substance": {
            "type": "n",
            "pronunciation": "/ˈsʌb.stəns/",
            "meaning": "chất liệu, vật chất"
        },
        "succeed": {
            "type": "v",
            "pronunciation": "/səkˈsiːd/",
            "meaning": "thành công, đạt được"
        },
        "success": {
            "type": "n",
            "pronunciation": "/səkˈses/",
            "meaning": "thành công"
        },
        "such": {
            "type": "det",
            "pronunciation": "/sʌtʃ/",
            "meaning": "như vậy, như thế"
        },
        "sudden": {
            "type": "adj",
            "pronunciation": "/ˈsʌd.ən/",
            "meaning": "đột ngột, bất ngờ"
        },
        "suffer": {
            "type": "v",
            "pronunciation": "/ˈsʌf.ɚ/",
            "meaning": "chịu đựng, chịu khổ"
        },
        "sugar": {
            "type": "n",
            "pronunciation": "/ˈʃʊɡ.ɚ/",
            "meaning": "đường"
        },
        "suggest": {
            "type": "v",
            "pronunciation": "/səˈdʒest/",
            "meaning": "đề xuất, gợi ý"
        },
        "suit": {
            "type": "n",
            "pronunciation": "/suːt/",
            "meaning": "bộ quần áo, bộ dụng cụ"
        },
        "summer": {
            "type": "n",
            "pronunciation": "/ˈsʌm.ɚ/",
            "meaning": "mùa hè"
        },
        "sun": {
            "type": "n",
            "pronunciation": "/sʌn/",
            "meaning": "mặt trời"
        },
        "super": {
            "type": "adj",
            "pronunciation": "/ˈsuː.pɚ/",
            "meaning": "siêu, cực kỳ"
        },
        "supply": {
            "type": "v",
            "pronunciation": "/səˈplaɪ/",
            "meaning": "cung cấp, cung ứng"
        },
        "support": {
            "type": "v",
            "pronunciation": "/səˈpɔːrt/",
            "meaning": "ủng hộ, hỗ trợ"
        },
        "suppose": {
            "type": "v",
            "pronunciation": "/səˈpoʊz/",
            "meaning": "cho rằng, giả sử"
        },
        "sure": {
            "type": "adj",
            "pronunciation": "/ʃʊr/",
            "meaning": "chắc chắn, dứt khoát"
        },
        "surface": {
            "type": "n",
            "pronunciation": "/ˈsɝː.fɪs/",
            "meaning": "bề mặt, mặt, diện tích"
        },
        "surprise": {
            "type": "v",
            "pronunciation": "/sɚˈpraɪz/",
            "meaning": "ngạc nhiên, làm bất ngờ"
        },
        "surround": {
            "type": "v",
            "pronunciation": "/səˈraʊnd/",
            "meaning": "bao quanh, vây quanh"
        },
        "survey": {
            "type": "v",
            "pronunciation": "/ˈsɝː.veɪ/",
            "meaning": "khảo sát, thăm dò ý kiến"
        },
        "survive": {
            "type": "v",
            "pronunciation": "/sərˈvaɪv/",
            "meaning": "sống sót, tồn tại"
        },
        "suspect": {
            "type": "v",
            "pronunciation": "/səˈspekt/",
            "meaning": "nghi ngờ, nghi phạm"
        },
        "swear": {
            "type": "v",
            "pronunciation": "/sweər/",
            "meaning": "tuyên thệ, nguyền rủa"
        },
        "sweat": {
            "type": "v",
            "pronunciation": "/swet/",
            "meaning": "đổ mồ hôi, làm cho đẫm mồ hôi"
        },
        "sweep": {
            "type": "v",
            "pronunciation": "/swiːp/",
            "meaning": "quét, lau chùi"
        },
        "sweet": {
            "type": "adj",
            "pronunciation": "/swiːt/",
            "meaning": "ngọt, dễ thương"
        },
        "swim": {
            "type": "v",
            "pronunciation": "/swɪm/",
            "meaning": "bơi"
        },
        "swing": {
            "type": "v",
            "pronunciation": "/swɪŋ/",
            "meaning": "đu, đung, đong đưa"
        },
        "switch": {
            "type": "v",
            "pronunciation": "/swɪtʃ/",
            "meaning": "bật, tắt, chuyển đổi"
        },
        "symbol": {
            "type": "n",
            "pronunciation": "/ˈsɪm.bəl/",
            "meaning": "biểu tượng, ký hiệu"
        },
        "system": {
            "type": "n",
            "pronunciation": "/ˈsɪs.təm/",
            "meaning": "hệ thống, cơ cấu"
        },
        "walk": {
            "type": "v",
            "pronunciation": "/wɔːk/",
            "meaning": "đi bộ, đi dạo"
        },
        "wall": {
            "type": "n",
            "pronunciation": "/wɔːl/",
            "meaning": "bức tường"
        },
        "want": {
            "type": "v",
            "pronunciation": "/wɑːnt/",
            "meaning": "muốn, mong muốn"
        },
        "war": {
            "type": "n",
            "pronunciation": "/wɔːr/",
            "meaning": "chiến tranh"
        },
        "warm": {
            "type": "adj",
            "pronunciation": "/wɔːrm/",
            "meaning": "ấm áp, ấm"
        },
        "wash": {
            "type": "v",
            "pronunciation": "/wɑːʃ/",
            "meaning": "rửa, giặt"
        },
        "waste": {
            "type": "v",
            "pronunciation": "/weɪst/",
            "meaning": "lãng phí, phí phạm"
        },
        "watch": {
            "type": "v",
            "pronunciation": "/wɑːtʃ/",
            "meaning": "xem, quan sát"
        },
        "water": {
            "type": "n",
            "pronunciation": "/ˈwɔː.t̬ɚ/",
            "meaning": "nước"
        },
        "way": {
            "type": "n",
            "pronunciation": "/weɪ/",
            "meaning": "cách, phương thức"
        },
        "weak": {
            "type": "adj",
            "pronunciation": "/wiːk/",
            "meaning": "yếu đuối"
        },
        "wear": {
            "type": "v",
            "pronunciation": "/wer/",
            "meaning": "mặc, đội"
        },
        "weather": {
            "type": "n",
            "pronunciation": "/ˈweð.ɚ/",
            "meaning": "thời tiết"
        },
        "week": {
            "type": "n",
            "pronunciation": "/wiːk/",
            "meaning": "tuần"
        },
        "weight": {
            "type": "n",
            "pronunciation": "/weɪt/",
            "meaning": "trọng lượng"
        },
        "welcome": {
            "type": "v",
            "pronunciation": "/ˈwel.kəm/",
            "meaning": "chào mừng"
        },
        "well": {
            "type": "adv",
            "pronunciation": "/wel/",
            "meaning": "tốt, khỏe mạnh"
        },
        "west": {
            "type": "n",
            "pronunciation": "/west/",
            "meaning": "phía Tây"
        },
        "what": {
            "type": "pron",
            "pronunciation": "/wʌt/",
            "meaning": "cái gì, điều gì"
        },
        "wheel": {
            "type": "n",
            "pronunciation": "/wiːl/",
            "meaning": "bánh xe"
        },
        "when": {
            "type": "adv",
            "pronunciation": "/wen/",
            "meaning": "khi nào"
        },
        "where": {
            "type": "adv",
            "pronunciation": "/wer/",
            "meaning": "ở đâu"
        },
        "whether": {
            "type": "conj",
            "pronunciation": "/ˈweð.ɚ/",
            "meaning": "liệu"
        },
        "which": {
            "type": "pron",
            "pronunciation": "/wɪtʃ/",
            "meaning": "nào, cái nào"
        },
        "while": {
            "type": "conj",
            "pronunciation": "/waɪl/",
            "meaning": "trong khi"
        },
        "white": {
            "type": "adj",
            "pronunciation": "/waɪt/",
            "meaning": "trắng"
        },
        "who": {
            "type": "pron",
            "pronunciation": "/huː/",
            "meaning": "ai"
        },
        "whole": {
            "type": "adj",
            "pronunciation": "/hoʊl/",
            "meaning": "toàn bộ, nguyên"
        },
        "why": {
            "type": "adv",
            "pronunciation": "/waɪ/",
            "meaning": "tại sao"
        },
        "wide": {
            "type": "adj",
            "pronunciation": "/waɪd/",
            "meaning": "rộng"
        },
        "wife": {
            "type": "n",
            "pronunciation": "/waɪf/",
            "meaning": "vợ"
        },
        "wild": {
            "type": "adj",
            "pronunciation": "/waɪld/",
            "meaning": "hoang dã, dữ tợn"
        },
        "will": {
            "type": "modal verb",
            "pronunciation": "/wɪl/",
            "meaning": "sẽ"
        },
        "win": {
            "type": "v",
            "pronunciation": "/wɪn/",
            "meaning": "thắng, chiến thắng"
        },
        "wind": {
            "type": "n",
            "pronunciation": "/wɪnd/",
            "meaning": "gió"
        },
        "window": {
            "type": "n",
            "pronunciation": "/ˈwɪn.doʊ/",
            "meaning": "cửa sổ"
        },
        "winter": {
            "type": "n",
            "pronunciation": "/ˈwɪn.t̬ɚ/",
            "meaning": "mùa đông"
        },
        "wire": {
            "type": "n",
            "pronunciation": "/waɪr/",
            "meaning": "dây điện"
        },
        "wise": {
            "type": "adj",
            "pronunciation": "/waɪz/",
            "meaning": "khôn ngoan"
        },
        "wish": {
            "type": "v",
            "pronunciation": "/wɪʃ/",
            "meaning": "ước, mong ước"
        },
        "with": {
            "type": "prep",
            "pronunciation": "/wɪð/",
            "meaning": "với"
        },
        "within": {
            "type": "prep",
            "pronunciation": "/wɪˈðɪn/",
            "meaning": "trong vòng"
        },
        "without": {
            "type": "prep",
            "pronunciation": "/wɪˈðaʊt/",
            "meaning": "không có"
        },
        "woman": {
            "type": "n",
            "pronunciation": "/ˈwʊm.ən/",
            "meaning": "phụ nữ"
        },
        "wonderful": {
            "type": "adj",
            "pronunciation": "/ˈwʌn.dɚ.fəl/",
            "meaning": "tuyệt vời, kỳ diệu"
        },
        "wood": {
            "type": "n",
            "pronunciation": "/wʊd/",
            "meaning": "gỗ"
        },
        "wool": {
            "type": "n",
            "pronunciation": "/wʊl/",
            "meaning": "len"
        },
        "word": {
            "type": "n",
            "pronunciation": "/wɝːd/",
            "meaning": "từ, lời"
        },
        "work": {
            "type": "n, v",
            "pronunciation": "/wɝːk/",
            "meaning": "công việc, làm việc"
        },
        "world": {
            "type": "n",
            "pronunciation": "/wɝːld/",
            "meaning": "thế giới"
        },
        "worry": {
            "type": "v",
            "pronunciation": "/ˈwɝː.i/",
            "meaning": "lo lắng, lo sợ"
        },
        "worth": {
            "type": "adj",
            "pronunciation": "/wɝːθ/",
            "meaning": "đáng giá, có giá trị"
        },
        "would": {
            "type": "modal verb",
            "pronunciation": "/wʊd/",
            "meaning": "sẽ, sẽ làm"
        },
        "yellow": {
            "type": "n",
            "pronunciation": "/ˈjɛloʊ/",
            "meaning": "màu vàng"
        },
        "yesterday": {
            "type": "adv",
            "pronunciation": "/ˈjɛstərˌdeɪ/",
            "meaning": "hôm qua"
        },
        "you": {
            "type": "pron",
            "pronunciation": "/juː/",
            "meaning": "bạn, anh, chị, em"
        },
        "young": {
            "type": "adj",
            "pronunciation": "/jʌŋ/",
            "meaning": "trẻ, trẻ tuổi"
        },
        "your": {
            "type": "det",
            "pronunciation": "/jʊr, jɔːr/",
            "meaning": "của bạn, của anh, của chị"
        },
        "yours": {
            "type": "pron",
            "pronunciation": "/jʊrz/",
            "meaning": "của bạn, của anh, của chị"
        },
        "yourself": {
            "type": "pron",
            "pronunciation": "/jʊrˈsɛlf, jɔr-/",
            "meaning": "bản thân bạn, chính bạn"
        }

        // Thêm dữ liệu từ điển của bạn ở đây
    }


    const main = document.getElementById("main");
    const btn = document.getElementById("search_btn");

    btn.addEventListener("click", () => {
        let inpWord = document.getElementById("search_word").value.toLowerCase();
        if (data[inpWord]) {
            main.innerHTML = `
            <div class="word">
            <div class="details">
                <h1>${inpWord}</h1>
                <span class ="tit">${data[inpWord].type} ${data[inpWord].pronunciation}</span>
            </div>
        </div>
        <div class="meaning">
            <div class="details">
                <p>Định nghĩa :</p>
                <div class="khung"><span>${data[inpWord].meaning}</span></div>
            </div>
        </div>
        <div class="meaning">
            <div class="details">
                <p>Ví Dụ :</p>
                <div class="khung"><span>${data[inpWord].example}</span></div>
            </div>
        </div>
        `;
        } else {
            main.innerHTML = `<h3 class="error">Không tìm thấy từ</h3>`;
        }
    });
})();