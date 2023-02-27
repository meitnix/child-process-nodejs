ffmpeg  -threads 2 -re -i IR.mp4 -b:v 1M -maxrate 2M -bufsize 1M \
-c:v libx264 -c:a aac -flags +global_header -tag:a 10 -preset ultrafast -r 30 \
-map 0 -c:a copy \
-f tee "[select=\'v:0,a:0\':f=flv]rtmp://localhost/live/stream1 \
|[select=\'v:0,a:1\':f=flv]rtmp://localhost/live/stream2"