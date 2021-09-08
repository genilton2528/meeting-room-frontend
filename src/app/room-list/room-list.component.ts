import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
	selector: 'app-room-list',
	templateUrl: './room-list.component.html',
	styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
	rooms!: Observable<Room[]>;

	constructor(
		private roomService: RoomService,
		private router: Router
	) { }

	ngOnInit(): void {
		this.reloadData();
	}

	reloadData(): void {
		this.rooms = this.roomService.getRoomList();
	}

	deleteRoom (id: number): void {
		this.roomService.deleteRoom(id)
		.subscribe(
			data => {
				console.log(data);
				this.reloadData();
			},
			error => console.error(error)			
		);
	}

	roomDetails(id: number): void {
		this.router.navigate(["details", id]);
	}

	updateRoom(id: number): void {
		this.router.navigate(["update", id]);
	}
}
