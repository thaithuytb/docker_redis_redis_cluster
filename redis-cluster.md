### Tạo node
- Tạo thư mục chứa cho từng cluster VD: 7000
- Tạo file redis.conf
- Nội dung file cấu hình như sau:
- ![image](https://user-images.githubusercontent.com/72178224/229963796-5fc369cf-3b0a-47c6-ab97-6a0c53f1a205.png)
### Chạy các node
- Tại thư mục chứa node chạy: redis-server ./redis.conf
- VD:
- cd 7000/      
- redís-server ./redis.conf
- ![image](https://user-images.githubusercontent.com/72178224/229964278-c325cbcb-8aac-4984-ac35-4640b8bbeb0d.png)
### Kết nối các nodes với nhau:
- Tại 1 node bất kỳ chạy lệnh sau:
- redis-cli --cluster create <node1_ip>:<node1_port> <node2_ip>:<node2_port> <node3_ip>:<node3_port> --cluster-replicas number_clone
- Ví dụ: redis-cli --cluster create 127.0.0.1:7000 127.0.0.1:7001 127.0.0.1:7002 --cluster-replicas 0
- <node1_ip>:<node1_port>: địa chỉ IP và cổng của các máy chủ đã cài đặt redis.
- number_clone: đặt số lượng replicas cho mỗi key-value pair trên Redis cluster.
- ![image](https://user-images.githubusercontent.com/72178224/229965199-4e776ce5-b226-462b-b371-8679773e598c.png)
### số master nodes ( nodes chính ) tối thiểu trên máy là 3. Nếu number_clone là 1 thì số nodes phải là 6. Ví dụ trên là 0 => chỉ cần 3 nodes.
### Kiểm tra thông tin từng node:
- redis-cli -p port -c
- VD: redis-cli -p 7000 -c

