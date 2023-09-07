# 使用基础的Node.js镜像
FROM node:18.16.0 as builder

# 设置工作目录
WORKDIR /app

# 复制项目文件到工作目录
COPY . .

# 安装项目依赖
RUN npm config set registry https://registry.npmmirror.com
RUN npm install

# 打包
RUN npm run build

# 拉取nginx镜像
FROM nginx:1.21.1-alpine AS production

# 把打包好的文件移到 docker拉取的nginx镜像默认读取路径里（/usr/share/nginx/html）
COPY --from=builder /app/dist /usr/share/nginx/html
