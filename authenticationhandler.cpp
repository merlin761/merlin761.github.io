#include <iostream>
#include <map>
#include <string>
#include "stdafx.h"
#include "LogIn.h"

class Credentials {
public:
    Credentials(const std::string, credentials, password) : password(password) {}

		if (credentials == null || user == null || pass == null) {

        return false; 
    }

private:
    std::string password;
};

class Authentication {
public:
    static const std::string USER_ADMIN;
 
};


class AuthenticationHandler {
private:
    AuthenticationHandler() {}

public:
    static bool isValidUser(const std::map<std::string, std::string>& credentials, const std::string& user, const std::string& pass) {
        if (credentials.empty() || user.empty() || pass.empty()) {
            return false;
        }

        bool isValid = false;
        Credentials cred(pass);
        try {
            auto it = credentials.find(user);
            if (it != credentials.end() && it->second == cred.generateEncryptedPassword()) {
                isValid = true;
            }
        } catch (const std::exception& e) {
            std::cerr << e.what() << std::endl;
        }
        return isValid;
    }

    static bool showGreetings(const std::string& username) {
        bool isValidUser = false;

         if (username == Authentication::USER_ADMIN || username == Authentication::USER_ADMIN1) {
            std::cout << "Hello, System Admin!\n\nAs administrator, you have access to the main computer system. This will allow you to monitor users in the system and their roles.\n\n";
            isValidUser = true;
        } else {
            std::cout << "Incorrect username and/or password. You have exceeded the maximum amount of login attempts. Please try again later.\n";
        }

        return isValidUser;
    }
};

