FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /deploy_dist/UserAccountDashboard /usr/share/nginx/html