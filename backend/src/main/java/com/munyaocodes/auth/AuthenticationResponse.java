package com.munyaocodes.auth;

import com.munyaocodes.customer.CustomerDTO;

public record AuthenticationResponse (
        String token,
        CustomerDTO customerDTO){
}
