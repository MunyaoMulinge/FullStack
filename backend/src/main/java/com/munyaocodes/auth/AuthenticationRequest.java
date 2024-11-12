package com.munyaocodes.auth;

public record AuthenticationRequest(
        String username,
        String password
) {
}
