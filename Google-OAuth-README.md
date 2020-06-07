# Google OAuth 2.0 using Node Express Mongo React

The following document takes a step by step approach for creating and setting up Authentication Flow using social Login (Google) + Express + MongoDB + React.

## 1. Database Setup

You can setup either localhost / cloud DB. I setup a cloud database in my case

```bash
mongodb://<dbuser>:<dbpassword>@ds123695.mlab.com:23695/i-am-bored-db
```

> NOTE: In case you need to connect using a client - Compass. Remember that the authentication database field is `i-am-bored-db`

---

## 2. Heroku Details

- [Heroku Link](https://iamboard.herokuapp.com/)

```bash
# Clone Heroku repo
$ heroku git:remote -a iamboard
```

---

## 3. Google Cloud Manager Account

- [Google Console Developer -OAuth Registration](https://console.cloud.google.com/)

Head over this website and follow the instructions carefully.

![Project Information](./design/screenshots/step01.png)

- Enter the name of the project (in this case: `i-am-bored`)
- Google take a couple of mins to setup the project

![API](./design/screenshots/step02.png)



- Now under the new project `i-am-bored`, Navigate to the sidebar
- Choose 👉 **APIs & Services**  👉 **OAuth consent screen**

![Consent](./design/screenshots/step03.png)

- In the OAuth consent screen 👉 Select The User Type radio button option to **External**
- Click **Create** button

![Details](./design/screenshots/step04.png)

> - **NOTE**: In the above screen, Provide only the **Application name**
> - **NOTE:** Don't be an asshole and upload your application icon. Because Google will need time to verify your account if you upload even a PICTURE!

- Click **Save** Button

![Summary](./design/screenshots/step05.png)

- This is how your application should look like
- Navigate to 👉 **Credentials** 👉 **Create Credentials**

![New Credentials](./design/screenshots/step06.png)

- Enter the details as shown below

![Add Server Details](./design/screenshots/step07.png)

![Add Server Details 02](./design/screenshots/step08.png)

- You will then obtain a **Client ID** & **Client Secret** that you need to store in your application

- Select Web Application and fill out the **"Authorized JavaScript Origins"** and **"Authorized redirect URI"** and click the **"Create"** button.

- Authorized JavaScript Origins: **http://localhost:5000**

- Authorized redirect URI: **http://localhost:5000/auth/google/callback**

>  **Note!** Google has made a number of changes to the OAuth credential's restrictions, and no longer allows wildcards in the redirect URI field. If you follow along with the upcoming video lecture you will get this error: ***Invalid Redirect: cannot contain a wildcard (\*)\***

>  Since the main goal of using *http://localhost:5000/** was to show the redirect error a few lectures later, we entered the correct redirect as shown above since this is what it will be changed to anyway.

---

## Copy Client ID and Secret

- Client ID

```bash
1014313043742-3o8tjkq730kkcuc0gum4efbjs8fbdkpi.apps.googleusercontent.com
```

- Client Secret

```bash
iHuNFNJT-i73D9KuWMEvtQeI
```

---

