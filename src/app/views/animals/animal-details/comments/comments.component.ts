import { Observable, switchMap, tap } from "rxjs";
import { Component, Input, OnInit } from "@angular/core";
import { Comments } from "./comments";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CommentsService } from "./comments.service";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.css"],
})
export class CommentsComponent implements OnInit {
  @Input() id!: number;
  comments$!: Observable<Comments>;
  commentForm!: FormGroup;

  constructor(
    private commentsService: CommentsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.comments$ = this.commentsService.searchComment(this.id);
    this.commentForm = this.formBuilder.group({
      comment: ["", Validators.maxLength(300)],
    });
  }

  save(): void {
    const comment = this.commentForm.get("comment")?.value ?? "";
    this.comments$ = this.commentsService.addComment(this.id, comment).pipe(
      switchMap(() => this.commentsService.searchComment(this.id)),
      tap(() => {
        this.commentForm.reset();
        alert("Comment Saved!");
      })
    );
  }
}
