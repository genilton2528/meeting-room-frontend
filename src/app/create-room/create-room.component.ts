import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
	selector: 'app-create-room',
	templateUrl: './create-room.component.html',
	styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {
	room: Room = new Room();
	submitted = false;

	constructor(
		private roomService: RoomService,
		private router: Router
	) { }

	ngOnInit(): void {
	}

	newRoom(): void {
		this.submitted = false;
		this.room = new Room();
	}

	save(): void {
		this.roomService.createRoom(this.room).subscribe(
			data => console.log(data),
			error => console.error(error)
		);
		this.room = new Room();
		this.goToList();
	}
	
	onSubmit(): void {
		this.submitted = true;
		this.save();
	}

	goToList(): void {
		this.router.navigate(["/rooms"]);
	}
}
