package com.cit.backend.api.controller;

import com.cit.backend.api.mapper.CondominiumMapper;
import com.cit.backend.api.mapper.ContactsCondominiumMapper;
import com.cit.backend.api.request.CondominiumRequest;
import com.cit.backend.api.request.ContactsCondominiumRequest;
import com.cit.backend.api.response.CondominiumResponse;
import com.cit.backend.api.response.ContactCondominiumResponse;
import com.cit.backend.api.response.ContactsCondominiumResponse;
import com.cit.backend.domain.entity.Condominium;
import com.cit.backend.domain.entity.ContactsCondominium;
import com.cit.backend.domain.service.CondominiumService;
import jakarta.annotation.security.RolesAllowed;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/condominium/contacts")
public class ContactsController {

    @Autowired
    private ContactsCondominiumMapper contactsCondominiumService;

    @Autowired
    private CondominiumService condominiumService;

    @GetMapping
    public ResponseEntity<List<ContactsCondominiumResponse>> getContacts() {
        List<ContactsCondominiumResponse> contactsList = new ArrayList<>();

        contactsList.add(new ContactsCondominiumResponse("Area A", new ContactCondominiumResponse[]{
                new ContactCondominiumResponse("Phone", "123-456-7890"),
                new ContactCondominiumResponse("Email", "condoA@example.com")
        }));

        contactsList.add(new ContactsCondominiumResponse("Area B", new ContactCondominiumResponse[]{
                new ContactCondominiumResponse("Phone", "234-567-8901"),
                new ContactCondominiumResponse("Email", "condoB@example.com")
        }));

        contactsList.add(new ContactsCondominiumResponse("Area C", new ContactCondominiumResponse[]{
                new ContactCondominiumResponse("Phone", "345-678-9012"),
                new ContactCondominiumResponse("Email", "condoC@example.com")
        }));

        contactsList.add(new ContactsCondominiumResponse("Area D", new ContactCondominiumResponse[]{
                new ContactCondominiumResponse("Phone", "456-789-0123"),
                new ContactCondominiumResponse("Email", "condoD@example.com")
        }));

        return ResponseEntity.status(HttpStatus.OK).body(contactsList);
    }

    @PostMapping
    @RolesAllowed("ADMIN")
    public ResponseEntity<ContactsCondominiumResponse> createContact(@Valid @RequestBody ContactsCondominiumRequest request) {
        ContactsCondominium contact = contactsCondominiumService.toContactsCondominium(request);
        //ContactsCondominium contactSaved = condominiumService.saveContact(contact);
        ContactsCondominiumResponse response = contactsCondominiumService.toContactsCondominiumResponse(contact);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

}
